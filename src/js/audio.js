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

// Estado inicial
let isPlaying = false;
let isMuted = false;
let lastVolume = 1;
let currentTrackIndex = 0;
let isShuffleEnabled = false;
let originalPlaylist = [];
let shuffledPlaylist = [];

// Detectar si estamos en index.html o en una página dentro de src/html/
const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
const audioPath = isIndexPage ? 'src/assets/audio/' : '../assets/audio/';

// Playlist predefinida
const defaultPlaylist = [
    {
        title: 'Bedroom',
        artist: 'Kylof Soze',
        src: audioPath + 'bedroom.mp3'
    },
    {
        title: 'Witapoke',
        artist: 'Kylof Soze',
        src: audioPath + 'witapoke.mp3'
    },
    {
        title: 'Push Me',
        artist: 'Kylof Soze',
        src: audioPath + 'pushme.mp3'
    },
    {
        title: 'AshKash',
        artist: '1nonly',
        src: audioPath + 'ashkash.mp3'
    },
    {
        title: 'What I Do', 
        artist: '1nonly',
        src: audioPath + 'whatido.mp3'
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
    if (playPauseBtn) {
        playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        playPauseBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
    }
}

function updateVolumeIcon() {
    if (!audioToggle) return;
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
    if (!audio || !progressBar || !currentTimeEl || !totalTimeEl) return;
    
    if (audio.duration && !isNaN(audio.duration)) {
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
    if (shuffleBtn) {
        shuffleBtn.classList.toggle('active', isShuffleEnabled);
    }
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
    
    if (!track || !audio) return;
    
    // Actualizar la fuente del audio
    audio.src = track.src;
    audio.load();
    
    // Actualizar información de la canción
    if (playerTitle) playerTitle.textContent = track.title;
    if (playerArtist) playerArtist.textContent = track.artist;
    
    // Actualizar estado de los botones
    if (prevBtn) {
        prevBtn.disabled = trackIndex === 0;
        prevBtn.classList.toggle('disabled', trackIndex === 0);
    }
    if (nextBtn) {
        nextBtn.disabled = trackIndex === playlist.length - 1;
        nextBtn.classList.toggle('disabled', trackIndex === playlist.length - 1);
    }
    
    // Si estaba reproduciendo, continuar
    if (isPlaying) {
        audio.play().catch(error => {
            console.error('Error al reproducir:', error);
            isPlaying = false;
            updatePlayPauseIcon();
        });
    }
}

function updatePlaylistUI() {
    if (!playlistContainer) return;
    
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

// Event Listeners
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (!audio) return;
        
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
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            loadTrack(currentTrackIndex);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const playlist = isShuffleEnabled ? shuffledPlaylist : originalPlaylist;
        if (currentTrackIndex < playlist.length - 1) {
            currentTrackIndex++;
            loadTrack(currentTrackIndex);
        }
    });
}

if (audioToggle) {
    audioToggle.addEventListener('click', () => {
        if (!audio) return;
        
        if (isMuted) {
            audio.volume = lastVolume;
            if (volumeControl) volumeControl.value = lastVolume * 100;
        } else {
            lastVolume = audio.volume;
            audio.volume = 0;
            if (volumeControl) volumeControl.value = 0;
        }
        isMuted = !isMuted;
        updateVolumeIcon();
    });
}

if (volumeControl) {
    volumeControl.addEventListener('input', (e) => {
        if (!audio) return;
        
        const volume = e.target.value / 100;
        audio.volume = volume;
        isMuted = volume === 0;
        updateVolumeIcon();
    });
}

if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
        if (!audio || !audio.duration) return;
        
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });
}

if (shuffleBtn) {
    shuffleBtn.addEventListener('click', updateShuffleState);
}

// Eventos del audio
if (audio) {
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
        if (playerTitle) playerTitle.textContent = 'Error en la reproducción';
        if (playerArtist) playerArtist.textContent = 'Intente nuevamente';
    });
    
    audio.addEventListener('canplay', () => {
        console.log('Audio cargado correctamente');
    });
}

// Manejo de archivos de audio
if (fileInput) {
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
}

// Inicialización
function initializePlayer() {
    if (!audio) {
        console.error('Elemento de audio no encontrado');
        return;
    }
    
    audio.volume = 1;
    if (volumeControl) volumeControl.value = 100;
    updateVolumeIcon();
    updatePlayPauseIcon();
    loadTrack(currentTrackIndex);
    updatePlaylistUI();
    
    console.log('Reproductor inicializado correctamente');
    console.log('Ruta de audio detectada:', audioPath);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlayer);
} else {
    initializePlayer();
} 