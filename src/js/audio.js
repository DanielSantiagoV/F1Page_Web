// Elementos del DOM
const audio = document.getElementById('backgroundAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audioToggle = document.getElementById('audioToggle');
const volumeControl = document.getElementById('volumeControl');
const progressBar = document.querySelector('.progress');
const currentTimeEl = document.querySelector('.current-time');
const totalTimeEl = document.querySelector('.total-time');
const progressContainer = document.querySelector('.progress-bar');
const playerTitle = document.querySelector('.player-title');
const playerArtist = document.querySelector('.player-artist');
const fileInput = document.getElementById('fileInput');
const shuffleBtn = document.getElementById('shuffleBtn');
const playlistContainer = document.querySelector('.playlist-container');
const volumeSlider = document.getElementById('volumeControl');


// Estado inicial
let isPlaying = false;
let isMuted = false;
let lastVolume = 1;
let currentTrackIndex = 0;
let isShuffleEnabled = false;
let originalPlaylist = [];
let shuffledPlaylist = [];

// Playlist predefinida
const defaultPlaylist = [
    {
        title: 'bedroom',
        artist: 'Kylof Soze',
        src: '../assets/audio/bedroom.mp3'
    },
    {
        title: 'Witapoke',
        artist: 'Kylof Soze',
        src: '../assets/audio/witapoke.mp3'
    },
    {
        title: 'Push Me',
        artist: 'Kylof Soze',
        src: '../assets/audio/pushme.mp3'
    },
    {
        title: 'AshKash',
        artist: '1nonly',
        src: '../assets/audio/ashkash.mp3'
    },
    {
        title: 'What I Do', 
        artist: '1nonly',
        src: '../assets/audio/whatido.mp3'
    }
];

// Inicializar playlist
originalPlaylist = [...defaultPlaylist];
shuffledPlaylist = [...defaultPlaylist];

// Funciones de utilidad
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updatePlayPauseIcon() {
    playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playPauseBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
}

function updateVolumeIcon() {
    const volume = audio.volume;
    if (volume === 0 || isMuted) {
        audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        audioToggle.setAttribute('aria-label', 'Unmute');
    } else if (volume < 0.3) {
        audioToggle.innerHTML = '<i class="fas fa-volume-down"></i>';
        audioToggle.setAttribute('aria-label', 'Mute');
    } else if (volume < 0.7) {
        audioToggle.innerHTML = '<i class="fas fa-volume"></i>';
        audioToggle.setAttribute('aria-label', 'Mute');
    } else {
        audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        audioToggle.setAttribute('aria-label', 'Mute');
    }
}

function updateProgress() {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        totalTimeEl.textContent = formatTime(audio.duration);
    }
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function updateShuffleState() {
    isShuffleEnabled = !isShuffleEnabled;
    shuffleBtn.classList.toggle('active', isShuffleEnabled);
    if (isShuffleEnabled) {
        shuffledPlaylist = shuffleArray(originalPlaylist);
        // Mantener la canción actual al inicio
        const currentTrack = originalPlaylist[currentTrackIndex];
        const newIndex = shuffledPlaylist.findIndex(track => track.src === currentTrack.src);
        if (newIndex !== -1) {
            [shuffledPlaylist[0], shuffledPlaylist[newIndex]] = [shuffledPlaylist[newIndex], shuffledPlaylist[0]];
        }
        currentTrackIndex = 0;
    } else {
        // Encontrar la canción actual en la lista original
        const currentTrack = shuffledPlaylist[currentTrackIndex];
        currentTrackIndex = originalPlaylist.findIndex(track => track.src === currentTrack.src);
    }
}

function loadTrack(trackIndex) {
    const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
    const track = playlist[trackIndex];
    
    // Crear nuevo elemento de audio
    const newAudio = new Audio();
    newAudio.src = track.src;
    newAudio.preload = 'auto';
    
    // Configurar eventos del nuevo audio
    newAudio.addEventListener('canplaythrough', () => {
        audio.src = track.src;
        audio.load();
        playerTitle.textContent = track.title;
        playerArtist.textContent = track.artist;
        
        // Actualizar estado de los botones
        prevBtn.disabled = trackIndex === 0;
        nextBtn.disabled = trackIndex === playlist.length - 1;
        
        // Actualizar clases visuales
        prevBtn.classList.toggle('disabled', trackIndex === 0);
        nextBtn.classList.toggle('disabled', trackIndex === playlist.length - 1);
        
        // Actualizar lista de reproducción
        updatePlaylistUI();
        
        // Si estaba reproduciendo, continuar
        if (isPlaying) {
            audio.play().catch(error => {
                console.error('Error al reproducir:', error);
                isPlaying = false;
                updatePlayPauseIcon();
            });
        }
    });
    
    newAudio.addEventListener('error', (e) => {
        console.error('Error al cargar el audio:', e);
        playerTitle.textContent = 'Error al cargar el audio';
        playerArtist.textContent = 'Intente nuevamente';
    });
}

function updatePlaylistUI() {
    const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
    playlistContainer.innerHTML = '';
    
    playlist.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
        trackElement.innerHTML = `
            <span class="track-number">${index + 1}</span>
            <div class="track-info">
                <span class="track-title">${track.title}</span>
                <span class="track-artist">${track.artist}</span>
            </div>
        `;
        trackElement.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            if (isPlaying) {
                audio.play();
            }
        });
        playlistContainer.appendChild(trackElement);
    });
}

volumeSlider.addEventListener('input', function () {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.setProperty('--val', `${value}%`);
  });
  
// Event Listeners
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(error => {
            console.error('Error al reproducir:', error);
            return;
        });
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
});

prevBtn.addEventListener('click', () => {
    const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        loadTrack(currentTrackIndex);
    }
});

nextBtn.addEventListener('click', () => {
    const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
    if (currentTrackIndex < playlist.length - 1) {
        currentTrackIndex++;
        loadTrack(currentTrackIndex);
    }
});

audioToggle.addEventListener('click', () => {
    if (isMuted) {
        audio.volume = lastVolume;
        volumeControl.value = lastVolume * 100;
    } else {
        lastVolume = audio.volume;
        audio.volume = 0;
        volumeControl.value = 0;
    }
    isMuted = !isMuted;
    updateVolumeIcon();
});

volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audio.volume = volume;
    isMuted = volume === 0;
    updateVolumeIcon();
});

progressContainer.addEventListener('click', (e) => {
    if (audio.duration) {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }
});

shuffleBtn.addEventListener('click', updateShuffleState);

// Eventos del audio
audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', () => {
    const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
    if (currentTrackIndex < playlist.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
});

audio.addEventListener('error', (e) => {
    console.error('Error en el audio:', e);
    playerTitle.textContent = 'Error en la reproducción';
    playerArtist.textContent = 'Intente nuevamente';
});

// Manejo de archivos de audio
fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('audio/'));
    
    if (files.length > 0) {
        files.forEach(file => {
            const url = URL.createObjectURL(file);
            const newTrack = {
                title: file.name.replace(/\.[^/.]+$/, ""),
                artist: 'Archivo local',
                src: url
            };
            originalPlaylist.push(newTrack);
        });
        
        if (isShuffleEnabled) {
            shuffledPlaylist = shuffleArray(originalPlaylist);
        }
        
        updatePlaylistUI();
    }
});

// Inicialización
audio.volume = 1;
volumeControl.value = 100;
updateVolumeIcon();
updatePlayPauseIcon();
loadTrack(currentTrackIndex);
updatePlaylistUI();

// --- AUTOPLAY UNIVERSAL, INDICADOR VISUAL, LOOP Y FALLBACK INTELIGENTE ---
function createMusicActivationButton() {
    if (document.getElementById('activate-music-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'activate-music-btn';
    btn.innerHTML = '<i class="fas fa-music"></i> Activar música';
    btn.style.position = 'fixed';
    btn.style.bottom = '90px';
    btn.style.right = '20px';
    btn.style.zIndex = '2000';
    btn.style.background = 'linear-gradient(90deg, #ff0000, #ff4d4d)';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '24px';
    btn.style.padding = '12px 22px';
    btn.style.fontSize = '16px';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'opacity 0.3s';
    btn.style.opacity = '0.95';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.gap = '10px';
    btn.tabIndex = 0;
    btn.setAttribute('aria-label', 'Activar música de fondo');
    btn.addEventListener('click', () => {
        tryAutoplay(true);
        btn.style.opacity = '0';
        setTimeout(() => btn.remove(), 400);
    });
    document.body.appendChild(btn);
}

function tryAutoplay(forcePlay = false) {
    if (!audio) return;
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
    audio.volume = 0.7;
    // Si es un intento forzado (por botón), usar play() directo
    const playPromise = forcePlay ? audio.play() : audio.play();
    playPromise.then(() => {
        isPlaying = true;
        updatePlayPauseIcon();
        showPlayingIndicator(true);
        const btn = document.getElementById('activate-music-btn');
        if (btn) btn.remove();
    }).catch(() => {
        // Si el navegador bloquea autoplay, mostrar el botón flotante
        isPlaying = false;
        updatePlayPauseIcon();
        showPlayingIndicator(false);
        createMusicActivationButton();
    });
}

document.addEventListener('DOMContentLoaded', () => tryAutoplay(false));
window.addEventListener('load', () => tryAutoplay(false));

// Indicador visual de reproducción (animación en el botón de play/pause)
function showPlayingIndicator(isPlaying) {
    if (!playPauseBtn) return;
    if (isPlaying) {
        playPauseBtn.classList.add('playing-indicator');
    } else {
        playPauseBtn.classList.remove('playing-indicator');
    }
}

// Reproducir la siguiente canción automáticamente al terminar, en bucle
if (audio) {
    audio.addEventListener('ended', () => {
        const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
        if (currentTrackIndex < playlist.length - 1) {
            currentTrackIndex++;
        } else {
            currentTrackIndex = 0;
        }
        loadTrack(currentTrackIndex);
        audio.play().then(() => {
            isPlaying = true;
            updatePlayPauseIcon();
            showPlayingIndicator(true);
        }).catch(() => {
            isPlaying = false;
            updatePlayPauseIcon();
            showPlayingIndicator(false);
        });
    });
}

// Actualizar el indicador visual cada vez que se cambia el estado
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        showPlayingIndicator(isPlaying);
    });
} 