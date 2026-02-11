const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const musicSource = document.getElementById("musicSource");

musicSource.src = config.music.musicUrl;
bgMusic.volume = config.music.volume;
bgMusic.load();

let isPlaying = false;

musicToggle.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play()
            .then(() => {
                isPlaying = true;
                musicToggle.textContent = config.music.stopText;
            })
            .catch(err => {
                console.error("Music play blocked:", err);
            });
    } else {
        bgMusic.pause();
        isPlaying = false;
        musicToggle.textContent = config.music.startText;
    }
});
