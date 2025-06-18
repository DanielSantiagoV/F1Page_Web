# F1 Page Web - Formula 1 Website

A comprehensive Formula 1 website featuring drivers, teams, vehicles, tracks, and simulation functionality.

## Project Structure

```
F1Page_Web/
├── index.html                 # Main landing page
├── src/
│   ├── html/                  # HTML pages
│   │   ├── login.html         # Login page
│   │   ├── registrar.html     # Registration page
│   │   ├── drivers.html       # Drivers page
│   │   ├── teams.html         # Teams page
│   │   ├── vehicles.html      # Vehicles page
│   │   ├── tracks.html        # Tracks page
│   │   ├── simulation.html    # Simulation page
│   │   ├── forgot-password.html # Password recovery page
│   │   └── index.html         # Main content page
│   ├── css/                   # Stylesheets
│   │   ├── style.css          # Main styles
│   │   ├── index.css          # Index page styles
│   │   ├── pilotos.css        # Drivers page styles
│   │   ├── vehiculos.css      # Vehicles page styles
│   │   ├── equipos.css        # Teams page styles
│   │   ├── simulacion.css     # Simulation page styles
│   │   ├── login&signup.css   # Login/Register styles
│   │   ├── reproductor.css    # Audio player styles
│   │   ├── mediaqueries.css   # Responsive design
│   │   ├── styles.css         # Basic styles
│   │   ├── variable.css       # CSS variables
│   │   └── variables.css      # Additional variables
│   ├── js/                    # JavaScript files
│   │   ├── audio.js           # Audio player functionality
│   │   ├── navigation.js      # Navigation handling
│   │   ├── login.js           # Login functionality
│   │   ├── signup.js          # Registration functionality
│   │   ├── drivers.js         # Drivers page logic
│   │   ├── teams.js           # Teams page logic
│   │   ├── vehicles.js        # Vehicles page logic
│   │   ├── tracks.js          # Tracks page logic
│   │   ├── simulation.js      # Simulation functionality
│   │   ├── hamburguesa.js     # Mobile menu
│   │   ├── index.js           # Main page logic
│   │   ├── roles.js           # User roles
│   │   └── data files         # Various data files
│   └── assets/                # Media files
│       ├── images/            # Images and logos
│       ├── audio/             # Audio files
│       └── video/             # Video files
└── source/
    └── css/
        └── f1-style.css       # Additional F1 styles
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth navigation between pages
- **Audio Player**: Background music with controls
- **Particle Effects**: Dynamic background animations
- **User Authentication**: Login and registration system
- **F1 Content**: Comprehensive information about drivers, teams, vehicles, and tracks
- **Simulation**: Interactive F1 racing simulation

## How to Run

1. **Local Development Server**:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```

2. **Open in Browser**:
   - Navigate to `http://localhost:8000`
   - The main page will load automatically

## Pages

- **Home** (`index.html`): Landing page with F1 news and highlights
- **Login** (`src/html/login.html`): User authentication
- **Register** (`src/html/registrar.html`): User registration
- **Drivers** (`src/html/drivers.html`): F1 drivers information
- **Teams** (`src/html/teams.html`): F1 teams information
- **Vehicles** (`src/html/vehicles.html`): F1 cars information
- **Tracks** (`src/html/tracks.html`): F1 circuits information
- **Simulation** (`src/html/simulation.html`): Interactive racing simulation

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Interactive functionality
- **Particles.js**: Background animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- All routes have been fixed to ensure proper navigation
- Missing CSS files have been created
- Audio and video files are properly linked
- Responsive design implemented
- Cross-browser compatibility ensured

## License

This project is for educational purposes.