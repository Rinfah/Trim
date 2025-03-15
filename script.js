const player = document.getElementById('audioPlayer');
const songs = ['song1_T.mp3', 'song2_Y.mp3', 'song3_S.mp3'];
let currentSongIndex = 0;

function playMusic(song) {
    player.src = song;
    player.play();

    // Update progress bar while playing
    player.addEventListener('timeupdate', updateProgressBar);

    // Handle end of song
    player.onended = handleSongEnd;
}

function handleSongEnd() {
    currentSongIndex++;
    if (currentSongIndex < songs.length) {
        playMusic(songs[currentSongIndex]);
    } else {
        // Trigger sunset animation when last song ends
        document.body.classList.add('sunset');
        showSpecialMessage(); // Show message when last song ends
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const value = (player.currentTime / player.duration) * 100;
    progressBar.style.width = value + '%';
}

function showSpecialMessage() {
    const message = document.getElementById('specialMessage');
    message.classList.remove('hidden');
    message.classList.add('show'); // Trigger fade-in effect
}