const tracksData = [
    {src:"musics/jazz.mp3", name:"1h30 Full Jazz Study", img:"images/jazz.jpg", type:"classic"},
    {src:"musics/lakey_inspired.mp3", name:"33 Songs Lakey Inspired", img:"images/lakey inspired.jpg", type:"lofi"},
    {src:"musics/lofi_relax.mp3", name:"2h Lofi Hip Hop Relax", img:"images/lofi girl.png", type:"lofi"},
    {src:"musics/city_pop.mp3", name:"1h City Pop", img:"images/city_pop.jpg",type:"upbeat"},
    {src:"musics/jungle.mp3", name:"1h Jungle", img:"images/jungle.jpg",type:"upbeat"},
    {src:"musics/playboi_carti.mp3", name:"1h Playboi Carti Type Beat", img:"images/playboi_carti.jpg",type:"urban"},
    {src:"musics/spatial_ambiant.mp3", name:"1h Spatial Ambiant Music", img:"images/spatial_ambiant.jpg",type:"ambient"},
    {src:"musics/brazil_lofi.mp3", name:"1h Brazil Lofi", img:"images/brazil_lofi.jpg", type:"lofi"},
    {src:"musics/cloud.mp3", name:"45min Cloud Lofi", img:"images/cloud.jpg",type:"lofi"},
    {src:"musics/house_zara.mp3", name:"1h Zara House", img:"images/house_zara.jpg",type:"upbeat"},
    {src:"musics/classic_music.mp3", name:"1h Classic Music", img:"images/classic_music.jpg", type:"classic"},
    {src:"musics/synthwave_retro.mp3", name:"40min Synthwave Retro", img:"images/synthwave_retro.jpg",type:"upbeat"},
    {src:"musics/wood_fire.mp3", name:"1h Wood Fire", img:"images/wood_fire.jpg",type:"ambient"},
    {src:"musics/rain.mp3", name:"1h Rain", img:"images/rain.jpg",type:"ambient"},
    {src:"musics/waves.mp3", name:"1h Waves", img:"images/waves.jpg",type:"ambient"},
    {src:"musics/meditation.mp3", name:"1h Meditation", img:"images/meditation.jpg",type:"ambient"},
    {src:"musics/nintendo_vibes.mp3", name:"1h Nintendo Vibes", img:"images/nintendo_vibes.jpg",type:"lofi"},
    {src:"musics/aesthetic_study.mp3", name:"1h Aesthetic Study", img:"images/aesthetic_study.jpg", type:"lofi"},
    {src:"musics/jazz_lofi.mp3", name:"1h Jazz Lofi", img:"images/jazz_lofi.png", type:"lofi"},
    {src:"musics/deep_house.mp3", name:"1h Deep House", img:"images/deep_house.jpg",type:"upbeat"},
    {src:"musics/lofi_hip_hop.mp3", name:"1h Lofi Hip Hop", img:"images/lofi_hip_hop.jpg", type:"lofi"},
    {src:"musics/1am_lofi.mp3", name:"1h Lofi Night Study", img:"images/1am_lofi.jpg", type:"lofi"},
    {src:"musics/homer_drive.mp3", name:"1h Chill Driving Music", img:"images/homer_drive.jpg",type:"lofi"},
    {src:"musics/heavenly_beats.mp3", name:"80min Heavenly Type Beats", img:"images/heavenly_beats.png",type:"urban"},
    {src:"musics/underground_house.mp3", name:"40min Underground House", img:"images/underground_house.png",type:"upbeat"},
    {src:"musics/us_type_beats.mp3", name:"1h US Type Beats", img:"images/us_type_beats.jpg",type:"urban"},
    {src:"musics/ambiant_classic_jazz.mp3", name:"1h Ambiant Classic Jazz", img:"images/ambiant_classic_jazz.jpg",type:"classic"},
    {src:"musics/winter_chill.mp3", name:"1h Winter Chill Beats", img:"images/winter_chill.jpg",type:"urban"},
    {src:"musics/spongebob_relaxing.mp3", name:"1h Spongebob Relaxing Music", img:"images/spongebob_relaxing.jpg",type:"lofi"},
    {src:"musics/morning_lofi.mp3", name:"1h Morning Coffee Lofi", img:"images/morning_lofi.jpg",type:"lofi"},
    {src:"musics/scenic_drive.mp3", name:"1h Scenic Drive Beats", img:"images/scenic_drive.jpg",type:"urban"},
    {src:"musics/atmospheric_jungle.mp3", name:"1h Atmospheric Jungle", img:"images/atmospheric_jungle.jpg",type:"upbeat"},
    {src:"musics/space_jazz.mp3", name:"1h Space Jazz Beats", img:"images/space_jazz.jpg",type:"urban"},
    {src:"musics/studio_ghibli.mp3", name:"1h Studio Ghibli Theme Music", img:"images/studio_ghibli.png",type:"classic"},
    {src:"musics/post_rock.mp3", name:"75min Post Rock Instrumental", img:"images/post_rock.jpg",type:"classic"},
    {src:"musics/liquid_drum_and_bass.mp3", name:"1h Liquid Drum & Bass Music", img:"images/liquid_drum_and_bass.jpg",type:"upbeat"},
    {src:"musics/deep_space_drone.mp3", name:"1h Deep Space Drone Music", img:"images/deep_space_drone.jpg",type:"ambient"},
    {src:"musics/vaporwave_mallsoft.mp3", name:"1h Vaporwave Mallsoft Music", img:"images/vaporwave_mallsoft.jpg",type:"ambient"},
    {src:"musics/deep_focus_binaural_beats.mp3", name:"1h Deep Focus Binaural Beats", img:"images/deep_focus_binaural_beats.png",type:"ambient"},
    {src:"musics/japan_lofi.mp3", name:"1h Japanese Lofi Work", img:"images/japan_lofi.jpg",type:"lofi"},
    {src:"musics/coding_vibes.mp3", name:"1h Coding Vibes Music", img:"images/coding_vibes.png",type:"lofi"},
    {src:"musics/trip_to_dreamworld.mp3", name:"Trip to Dreamworld - ADTurnUp", img:"images/trip_to_dreamworld.jpg",type:"lofi"},
    {src:"musics/hypnotic_techno.mp3", name:"1h Deep Hypnotic Techno", img:"images/hypnotic_techno.png",type:"upbeat"},
    {src:"musics/90s_hip_hop.mp3", name:"1h 90's Hip Hop Music", img:"images/90s_hip_hop.jpg",type:"urban"},
    {src:"musics/nostalgic_drum_and_bass.mp3", name:"1h Nostalgic Drum & Bass", img:"images/nostalgic_drum_and_bass.jpg",type:"upbeat"},
    
];

// ---------- DOM REFERENCES ----------
const player = document.getElementById('audioPlayer');
const playerBar = document.querySelector('.player-bar');
const playerThumbnail = document.getElementById('playerThumbnail');
const currentTrack = document.getElementById('currentTrack');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime'); // may be undefined if not present in DOM
const duration = document.getElementById('duration');       // may be undefined if not present in DOM
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const mainContent = document.getElementById('main-content');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const shuffleBtn = document.getElementById('shuffleBtn');

// ---------- STATE ----------
let filteredTracks = tracksData.slice(); // tracks currently shown / navigable
let currentFilteredIndex = -1;           // index inside filteredTracks
let isShuffleOn = false;

// NOUVEAU: Variables d'état pour le filtrage
let currentSearchTerm = '';
let currentFilterType = 'all';

// ensure volume slider has a sensible default
if (volumeSlider) {
    volumeSlider.value = localStorage.getItem('sg_volume') ?? 1;
    player.volume = Number(volumeSlider.value);
}

// ---------- PLAYER HELPERS ----------
function formatTime(seconds = 0) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

function showPlayerBar() {
    if (playerBar) playerBar.classList.remove('hidden');
}

function hidePlayerBar() {
    if (playerBar) playerBar.classList.add('hidden');
}

function shufflePlay() {
    if (filteredTracks.length === 0) return;

    let newIndex;
    do {
        // Sélectionne un index aléatoire dans les pistes filtrées
        newIndex = Math.floor(Math.random() * filteredTracks.length);
    } while (newIndex === currentFilteredIndex && filteredTracks.length > 1); // Assure de ne pas rejouer la même piste si possible

    currentFilteredIndex = newIndex;
    playTrack(filteredTracks[currentFilteredIndex].src);
}

// ---------- PLAY / LOAD ----------
function playTrack(src) {
    // find index inside filteredTracks
    currentFilteredIndex = filteredTracks.findIndex(t => t.src === src);

    // if not found in filtered selection, try to find in full list and make filteredTracks = full list (fallback)
    if (currentFilteredIndex === -1) {
        const fallbackIndex = tracksData.findIndex(t => t.src === src);
        if (fallbackIndex === -1) return; // can't find
        filteredTracks = tracksData.slice();
        currentFilteredIndex = filteredTracks.findIndex(t => t.src === src);
    }

    const track = filteredTracks[currentFilteredIndex];
    if (!track) return;

    document.title = `SilentGroove - ${track.name}`; // Met à jour l'onglet

    player.src = track.src;
    player.play().catch(()=>{}); // play may fail if not user gesture
    currentTrack.textContent = track.name || 'Unknown';
    if (playerThumbnail) playerThumbnail.src = track.img || '';
    showPlayerBar();
}

// ---------- EVENTS: player ----------
playPauseBtn?.addEventListener('click', () => {
    if (!player.src) return;
    if (player.paused) player.play();
    else player.pause();
});

player.addEventListener('play', () => playPauseBtn && (playPauseBtn.textContent = '⏸'));
player.addEventListener('pause', () => playPauseBtn && (playPauseBtn.textContent = '▶'));

player.addEventListener('timeupdate', () => {
    if (!isNaN(player.duration) && progress) {
        progress.max = player.duration;
        progress.value = player.currentTime;
        if (currentTime) currentTime.textContent = formatTime(player.currentTime);
        if (duration) duration.textContent = formatTime(player.duration);
    }
});

// when track ends -> advance inside filteredTracks (loop to first)
player.addEventListener('ended', () => {
    if (filteredTracks.length === 0) return;
    
    // Utilise shuffle si activé
    if (isShuffleOn) {
        shufflePlay();
    } else {
        currentFilteredIndex = (currentFilteredIndex + 1) % filteredTracks.length;
        playTrack(filteredTracks[currentFilteredIndex].src);
    }
});

// progress seek
progress?.addEventListener('input', (e) => {
    player.currentTime = Number(e.target.value);
});

// ---------- NEXT / PREV using filteredTracks ----------
nextBtn?.addEventListener('click', () => {
    if (filteredTracks.length === 0) return;
    // Appliquer la logique de shuffle si elle est active
    if (isShuffleOn) {
        shufflePlay();
    } else {
        // Logique séquentielle normale
        if (currentFilteredIndex < filteredTracks.length - 1) currentFilteredIndex++;
        else currentFilteredIndex = 0; // wrap around
        playTrack(filteredTracks[currentFilteredIndex].src);
    }
});

prevBtn?.addEventListener('click', () => {
    if (filteredTracks.length === 0) return;
    if (currentFilteredIndex > 0) currentFilteredIndex--;
    else currentFilteredIndex = filteredTracks.length - 1; // wrap around
    playTrack(filteredTracks[currentFilteredIndex].src);
});

// ---------- SHUFFLE TOGGLE ----------
shuffleBtn?.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    
    // Mettre à jour la classe pour le style CSS
    if (shuffleBtn) {
        shuffleBtn.classList.toggle('active', isShuffleOn);
        
        // Mettre à jour l'icône en fonction de l'état
        if (isShuffleOn) {
            shuffleBtn.textContent = '🔀'; // Icône Mélange (Shuffle)
        } else {
            shuffleBtn.textContent = '🔁'; // Icône Répétition de la playlist (Séquentiel)
        }
    }
    
    console.log(`Shuffle is now: ${isShuffleOn ? 'ON' : 'OFF'}`);
});

// ---------- VOLUME / MUTE ----------
volumeSlider?.addEventListener('input', (e) => {
    player.volume = Number(e.target.value);
    localStorage.setItem('sg_volume', e.target.value);
    if (muteBtn) muteBtn.textContent = player.volume === 0 ? '🔇' : '🔊';
});

muteBtn?.addEventListener('click', () => {
    player.muted = !player.muted;
    muteBtn.textContent = player.muted ? '🔇' : '🔊';
    if (!player.muted && volumeSlider) volumeSlider.value = player.volume;
});

// ---------- GALLERY / SPA ----------
// render gallery from a list of tracks (default: filteredTracks)
function loadGallery(tracks = filteredTracks) {
    const gallery = document.getElementById('gallery-container');
    if (!gallery) return;
    gallery.innerHTML = '';
    tracks.forEach(track => {
        const div = document.createElement('div');
        div.className = 'track';
        div.dataset.src = track.src;
        div.dataset.name = track.name;
        div.innerHTML = `
            <img src="${track.img}" alt="${track.name}">
            <div class="track-name-overlay">${track.name}</div>
        `;
        div.addEventListener('click', () => {
            // when click, ensure filteredTracks contains this track (it should if you clicked after filtering)
            // then play it
            // If not present (edge case), set filteredTracks to tracksData
            if (!filteredTracks.find(t => t.src === track.src)) {
                filteredTracks = tracksData.slice();
            }
            playTrack(track.src);
        });
        gallery.appendChild(div);
    });
}

// NOUVEAU: Fonction pour appliquer les filtres et mettre à jour la galerie
function applyFilters() {
    // Récupérer les valeurs actuelles des contrôles DOM
    const musicType = document.getElementById('musicType');
    const searchBar = document.getElementById('searchBar'); // Récupération du champ de recherche

    // Si la page n'est pas 'home' (absence de musicType), on ignore l'exécution des filtres
    if (!musicType) return; 

    // Lire l'état actuel
    const type = musicType.value;
    // Utiliser la barre de recherche si elle existe
    const searchTerm = (searchBar?.value || '').toLowerCase(); 

    // Mettre à jour les variables d'état globales
    currentFilterType = type;
    currentSearchTerm = searchTerm;
    
    // 1. Filtrer par Type
    let tracksByType = (type === 'all') 
        ? tracksData.slice() 
        : tracksData.filter(t => t.type === type);

    // 2. Filtrer par Titre (Logique de recherche)
    let finalTracks = tracksByType.filter(t => 
        t.name.toLowerCase().includes(searchTerm)
    );

    filteredTracks = finalTracks;
    
    // reset current index (sinon next/prev peut pointer vers une piste non filtrée)
    currentFilteredIndex = -1;
    loadGallery(filteredTracks);
}


function loadPage(page) {
    switch(page) {
        case 'home':
            mainContent.innerHTML = `
                <h1>Welcome to SilentGroove 🎧</h1>
                <h2 class="subtitle">Listen to unlimited music, for free !</h2>

                <div class="filter-controls"> <div class="filter-container">
                        <label for="musicType">Filter by type: </label>
                        <select id="musicType">
                            <option value="all">🎵 All</option>
                            <option value="lofi">☕ Lo-Fi & Chill</option>
                            <option value="classic">🎻 Classic & Acoustic</option>
                            <option value="upbeat">⚡ Upbeat & Energy</option>
                            <option value="ambient">☁️ Ambient & Nature</option>
                            <option value="urban">🎧 Urban & Beats</option>
                        </select>
                    </div>

                    <div class="search-container">
                        <input type="text" id="searchBar" placeholder="Search by title...">
                    </div>
                </div>

                <div class="gallery" id="gallery-container"></div>
            `;
            
            // Les pistes initiales seront toutes les données tant que applyFilters n'est pas appelée
            filteredTracks = tracksData.slice();
            loadGallery();

            // hook filter select
            const musicType = document.getElementById('musicType');
            const searchBar = document.getElementById('searchBar'); 
            
            // Appeler la fonction de filtrage unifiée lorsqu'un filtre ou la recherche change
            musicType.addEventListener('change', applyFilters);
            searchBar.addEventListener('input', applyFilters); // Écoute la saisie en temps réel
            
            // Rétablir l'état des filtres si on revient à la page home
            musicType.value = currentFilterType;
            searchBar.value = currentSearchTerm;
            
            // IMPORTANT : Appliquer les filtres initiaux (avec recherche/type précédemment choisis)
            applyFilters();
            
            break;

        case 'about':
            mainContent.innerHTML = `
                <h1>About SilentGroove 🎧</h1>
                <p class="about-text">All the music on SilentGroove comes from royalty-free YouTube videos, carefully selected to provide you with relaxing, fun, and high-quality tracks.</p>
                <p class="about-text">Enjoy unlimited music without ever paying a dime and without any ads interrupting your flow. Discover your favorite tunes and let the beats carry you!</p>
                <h2>Keyboard Commands</h2>
                <p class="about-text">You can control playback directly with your keyboard (ensure the browser window is active):</p>
                <ul>
                    <li><b>Spacebar</b> : Pause or resume playback.</li>
                    <li><b>Right Arrow (→)</b> : Skip to the next track.</li>
                    <li><b>Left Arrow (←)</b> : Go back to the previous track.</li>
                    <li><b>M Key</b> : Toggle the sound (Mute/Unmute).</li>
                    <li><b>S Key</b> : Toggle shuffle mode (Shuffle On/Off).</li>
                </ul>
            `;
            break;

        case 'contact':
            mainContent.innerHTML = `
                <h1>Contact</h1>
                <p>Email : <a href="mailto:arthurlouette12@gmail.com">arthurlouette12@gmail.com</a></p>
                <p>GitHub : <a href="https://github.com/Arthvrr/SilentGroove" target="_blank">View the project here</a></p>
            `;
            break;

        case 'library':
            mainContent.innerHTML = `<h1>Music Library</h1><div class="gallery" id="gallery-container"></div>`;
            filteredTracks = tracksData.slice();
            loadGallery();
            break;
    }
}

// ---------- THEME TOGGLE ----------
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = 'Light Mode';
}
themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    if (themeToggle) themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// GESTION DES CONTRÔLES AU CLAVIER
document.addEventListener('keydown', (e) => {
    // Si l'utilisateur est en train de taper dans un champ de texte ou SELECT (pour éviter les conflits d'interface)
    if (document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA' ||
        document.activeElement.tagName === 'SELECT') { 
        
        // On permet explicitement à Espace, M et S de fonctionner même si un champ est actif, 
        // car ce sont des commandes de lecteur, pas de saisie.
        const key = e.key.toLowerCase();
        if (key !== ' ' && key !== 'm' && key !== 's') {
            return;
        }
    }
    
    // Convertir la touche pressée en minuscule pour gérer 'm' et 'M' ou 's' et 'S' sans duplication
    const key = e.key.toLowerCase(); 

    switch (key) {
        case ' ': // Touche Espace -> Play/Pause
            e.preventDefault(); 
            playPauseBtn?.click();
            break;
            
        case 'arrowright': // Touche Flèche Droite -> Piste Suivante
            e.preventDefault();
            nextBtn?.click();
            break;
            
        case 'arrowleft': // Touche Flèche Gauche -> Piste Précédente
            e.preventDefault();
            prevBtn?.click();
            break;

        case 'm': // Touche M -> Mute/Unmute
            muteBtn?.click();
            break;

        case 's': // Touche S -> Shuffle On/Off
            shuffleBtn?.click();
            break;
    }
});



const logoElement = document.querySelector('.logo');
const navLinksContainer = document.querySelector('.nav-links');

if (logoElement && navLinksContainer) {
    logoElement.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinksContainer.classList.toggle('show-nav');
        }
    });
}
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinksContainer.classList.remove('show-nav');
        }
    });
});

// initial
loadPage('home');
if (shuffleBtn) {
    shuffleBtn.textContent = isShuffleOn ? '🔀' : '🔁';
    shuffleBtn.classList.toggle('active', isShuffleOn);
}
hidePlayerBar(); // hide until a track is played