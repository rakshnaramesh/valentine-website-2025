// ===============================
// 💖 VALENTINE WEBSITE SCRIPT 💖
// ===============================

// Load config
const config = window.VALENTINE_CONFIG;

// Track current question
let currentQuestionIndex = 0;

// DOM elements
const container = document.getElementById("questionContainer");

// -------------------------------
// INITIALIZE PAGE
// -------------------------------
window.addEventListener("DOMContentLoaded", () => {
    document.title = config.pageTitle;
    document.getElementById("valentineTitle").textContent =
        `${config.valentineName}, my love... 💕`;

    createFloatingElements();
    setupMusicPlayer();
    renderQuestion();
});

// -------------------------------
// RENDER QUESTIONS DYNAMICALLY
// -------------------------------
function renderQuestion() {
    container.innerHTML = "";

    const q = config.questions[currentQuestionIndex];
    if (!q) return celebrate();

    const questionText = document.createElement("h2");
    questionText.textContent = q.text;
    container.appendChild(questionText);

    // LOVE METER QUESTION
    if (q.type === "love-meter") {
        renderLoveMeter(q);
        return;
    }

    // YES BUTTON
    const yesBtn = document.createElement("button");
    yesBtn.className = "cute-btn";
    yesBtn.textContent = q.yesBtn || "Yes ❤️";
    yesBtn.onclick = nextQuestion;
    container.appendChild(yesBtn);

    // NO BUTTON
    const noBtn = document.createElement("button");
    noBtn.className = "cute-btn";
    noBtn.textContent = q.noBtn || "No 😜";
    noBtn.onclick = () => moveButton(noBtn);
    container.appendChild(noBtn);

    // SECRET ANSWER (OPTIONAL)
    if (q.secretAnswer) {
        const secret = document.createElement("div");
        secret.className = "secret-answer";
        secret.textContent = q.secretAnswer;
        container.appendChild(secret);
    }
}

// -------------------------------
// LOVE METER
// -------------------------------
function renderLoveMeter(q) {
    const meterBox = document.createElement("div");
    meterBox.className = "love-meter";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = 10000;
    slider.value = 100;

    const valueText = document.createElement("p");
    valueText.innerHTML = `${q.startText} (<span id="loveValue">100</span>%)`;

    const extra = document.createElement("p");
    extra.id = "extraLove";
    extra.className = "hidden";

    slider.addEventListener("input", () => {
        const value = slider.value;
        document.getElementById("loveValue").textContent = value;

        if (value > 100) {
            extra.classList.remove("hidden");
            if (value > 5000) {
                extra.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extra.textContent = config.loveMessages.high;
            } else {
                extra.textContent = config.loveMessages.normal;
            }
        } else {
            extra.classList.add("hidden");
        }
    });

    const nextBtn = document.createElement("button");
    nextBtn.className = "cute-btn";
    nextBtn.textContent = q.nextBtn || "Next 💕";
    nextBtn.onclick = nextQuestion;

    meterBox.append(slider, valueText, extra, nextBtn);
    container.appendChild(meterBox);
}

// -------------------------------
// MOVE TO NEXT QUESTION
// -------------------------------
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < config.questions.length) {
        renderQuestion();
    } else {
        celebrate();
    }
}

// -------------------------------
// NO BUTTON RUN AWAY 😈
// -------------------------------
function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

// -------------------------------
// CELEBRATION 🎉
// -------------------------------
function celebrate() {
    container.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = config.celebration.title;

    const msg = document.createElement("p");
    msg.textContent = config.celebration.message;

    const emojis = document.createElement("p");
    emojis.textContent = config.celebration.emojis;

    container.append(title, msg, emojis);
    createHeartExplosion();
}

// -------------------------------
// FLOATING EMOJIS
// -------------------------------
function createFloatingElements() {
    const bg = document.querySelector(".floating-elements");

    [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears].forEach(e => {
        const el = document.createElement("div");
        el.className = "heart";
        el.textContent = e;
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = 10 + Math.random() * 15 + "s";
        bg.appendChild(el);
    });
}

function createHeartExplosion() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent =
            config.floatingEmojis.hearts[
                Math.floor(Math.random() * config.floatingEmojis.hearts.length)
            ];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = "5s";
        document.querySelector(".floating-elements").appendChild(heart);
    }
}

// -------------------------------
// MUSIC PLAYER 🎵
// -------------------------------
function setupMusicPlayer() {
    if (!config.music.enabled) return;

    const btn = document.getElementById("musicToggle");
    const audio = document.getElementById("bgMusic");
    document.getElementById("musicSource").src = config.music.musicUrl;
    audio.volume = config.music.volume || 0.5;

    btn.onclick = () => {
        if (audio.paused) {
            audio.play();
            btn.textContent = config.music.stopText;
        } else {
            audio.pause();
            btn.textContent = config.music.startText;
        }
    };

    if (config.music.autoplay) {
        audio.play().catch(() => {});
    }
}
