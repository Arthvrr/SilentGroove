// ---------- DATA ----------
const tracksData = [
    {src:"musics/jazz.mp3", name:"1h30 Full Jazz Study", img:"images/jazz.jpg", type:"classic"},
    {src:"musics/lakey_inspired.mp3", name:"33 Songs Lakey Inspired", img:"images/lakey inspired.jpg", type:"lofi"},
    {src:"musics/lofi_relax.mp3", name:"2h Lofi Hip Hop Relax", img:"images/lofi girl.png", type:"lofi"},
    {src:"musics/city_pop.mp3", name:"1h City Pop", img:"images/city_pop.jpg",type:"other"},
    {src:"musics/jungle.mp3", name:"1h Jungle", img:"images/jungle.jpg",type:"other"},
    {src:"musics/playboi_carti.mp3", name:"1h Playboi Carti Type Beat", img:"images/playboi_carti.jpg",type:"beats"},
    {src:"musics/spatial_ambiant.mp3", name:"1h Spatial Ambiant Music", img:"images/spatial_ambiant.jpg",type:"other"},
    {src:"musics/brazil_lofi.mp3", name:"1h Brazil Lofi", img:"images/brazil_lofi.jpg", type:"lofi"},
    {src:"musics/cloud.mp3", name:"45min Cloud Lofi", img:"images/cloud.jpg",type:"lofi"},
    {src:"musics/house_zara.mp3", name:"1h Zara House", img:"images/house_zara.jpg",type:"house"},
    {src:"musics/classic_music.mp3", name:"1h Classic Music", img:"images/classic_music.jpg", type:"classic"},
    {src:"musics/synthwave_retro.mp3", name:"40min Synthwave Retro", img:"images/synthwave_retro.jpg",type:"other"},
    {src:"musics/wood_fire.mp3", name:"1h Wood Fire", img:"images/wood_fire.jpg",type:"sounds"},
    {src:"musics/rain.mp3", name:"1h Rain", img:"images/rain.jpg",type:"sounds"},
    {src:"musics/waves.mp3", name:"1h Waves", img:"images/waves.jpg",type:"sounds"},
    {src:"musics/meditation.mp3", name:"1h Meditation", img:"images/meditation.jpg",type:"other"},
    {src:"musics/nintendo_vibes.mp3", name:"1h Nintendo Vibes", img:"images/nintendo_vibes.jpg",type:"other"},
    {src:"musics/aesthetic_study.mp3", name:"1h Aesthetic Study", img:"images/aesthetic_study.jpg", type:"other"},
    {src:"musics/jazz_lofi.mp3", name:"1h Jazz Lofi", img:"images/jazz_lofi.png", type:"lofi"},
    {src:"musics/deep_house.mp3", name:"1h Deep House", img:"images/deep_house.jpg",type:"house"},
    {src:"musics/lofi_hip_hop.mp3", name:"1h Lofi Hip Hop", img:"images/lofi_hip_hop.jpg", type:"lofi"},
    {src:"musics/1am_lofi.mp3", name:"1h Lofi Night Study", img:"images/1am_lofi.jpg", type:"lofi"},
    {src:"musics/homer_drive.mp3", name:"1h Chill Driving Music", img:"images/homer_drive.jpg",type:"other"},
    {src:"musics/heavenly_beats.mp3", name:"80min Heavenly Type Beats", img:"images/heavenly_beats.png",type:"beats"},
    {src:"musics/underground_house.mp3", name:"40min Underground House", img:"images/underground_house.png",type:"house"}
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

// ---------- STATE ----------
let filteredTracks = tracksData.slice(); // tracks currently shown / navigable
let currentFilteredIndex = -1;           // index inside filteredTracks

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
    currentFilteredIndex = (currentFilteredIndex + 1) % filteredTracks.length;
    playTrack(filteredTracks[currentFilteredIndex].src);
});

// progress seek
progress?.addEventListener('input', (e) => {
    player.currentTime = Number(e.target.value);
});

// ---------- NEXT / PREV using filteredTracks ----------
nextBtn?.addEventListener('click', () => {
    if (filteredTracks.length === 0) return;
    if (currentFilteredIndex < filteredTracks.length - 1) currentFilteredIndex++;
    else currentFilteredIndex = 0; // wrap around
    playTrack(filteredTracks[currentFilteredIndex].src);
});

prevBtn?.addEventListener('click', () => {
    if (filteredTracks.length === 0) return;
    if (currentFilteredIndex > 0) currentFilteredIndex--;
    else currentFilteredIndex = filteredTracks.length - 1; // wrap around
    playTrack(filteredTracks[currentFilteredIndex].src);
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

function loadPage(page) {
    switch(page) {
        case 'home':
            mainContent.innerHTML = `
                <h1>Welcome to SilentGroove 🎧</h1>
                <h2 class="subtitle">Listen to unlimited music, for free !</h2>

                <div class="filter-container">
                    <label for="musicType">Filter by type: </label>
                    <select id="musicType">
                        <option value="all">All</option>
                        <option value="lofi">Lofi</option>
                        <option value="beats">Beats</option>
                        <option value="classic">Classic</option>
                        <option value="house">House</option>
                        <option value="sounds">Sounds</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="gallery" id="gallery-container"></div>
            `;
            // default show all
            filteredTracks = tracksData.slice();
            loadGallery();

            // hook filter select
            const musicType = document.getElementById('musicType');
            musicType.addEventListener('change', (e) => {
                const type = e.target.value;
                filteredTracks = (type === 'all') ? tracksData.slice() : tracksData.filter(t => t.type === type);
                // reset current index (so next/prev won't accidentally point elsewhere)
                currentFilteredIndex = -1;
                loadGallery(filteredTracks);
            });
            break;

        case 'about':
            mainContent.innerHTML = `
                <h1>About SilentGroove 🎧</h1>
                <p class="about-text">All the music on SilentGroove comes from royalty-free YouTube videos, carefully selected to provide you with relaxing, fun, and high-quality tracks.</p>
                <p class="about-text">Enjoy unlimited music without ever paying a dime and without any ads interrupting your flow. Discover your favorite tunes and let the beats carry you!</p>
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

// initial
loadPage('home');
hidePlayerBar(); // hide until a track is played