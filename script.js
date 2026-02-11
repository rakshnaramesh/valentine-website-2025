// Initialize configuration
const config = window.VALENTINE_CONFIG;

// ---------------- CONFIG VALIDATION ----------------
function validateConfig() {
    const warnings = [];

    if (!config.valentineName) {
        warnings.push("Valentine's name not set, using default");
        config.valentineName = "My Love";
    }

    const isValidHex = (hex) =>
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);

    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            config.colors[key] = getDefaultColor(key);
        }
    });

    if (parseFloat(config.animations.floatDuration) < 5) {
        config.animations.floatDuration = "5s";
    }
}

function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// ---------------- DOM READY ----------------
window.addEventListener("DOMContentLoaded", () => {
    validateConfig();

    document.title = config.pageTitle;
    document.getElementById("valentineTitle").textContent =
        `${config.valentineName}, my love...`;

    // Question 1
    document.getElementById("question1Text").textContent =
        config.questions.first.text;
    document.getElementById("yesBtn1").textContent =
        config.questions.first.yesBtn;
    document.getElementById("noBtn1").textContent =
        config.questions.first.noBtn;
    document.getElementById("secretAnswerBtn").textContent =
        config.questions.first.secretAnswer;

    // Question 2
    document.getElementById("question2Text").textContent =
        config.questions.second.text;
    document.getElementById("startText").textContent =
        config.questions.second.startText;
    document.getElementById("nextBtn").textContent =
        config.questions.second.nextBtn;

    // Question 3
    document.getElementById("question3Text").textContent =
        config.questions.third.text;
    document.getElementById("yesBtn3").textContent =
        config.questions.third.yesBtn;
    document.getElementById("noBtn3").textContent =
        config.questions.third.noBtn;

    createFloatingElements();
    setupMusicPlayer();
    setInitialPosition();

    setupQuestion1Logic(); // ⭐ IMPORTANT
});

// ---------------- FLOATING EMOJIS ----------------
function createFloatingElements() {
    const container = document.querySelector(".floating-elements");

    config.floatingEmojis.hearts.forEach(h => {
        const div = document.createElement("div");
        div.className = "heart";
        div.innerHTML = h;
        setRandomPosition(div);
        container.appendChild(div);
    });

    config.floatingEmojis.bears.forEach(b => {
        const div = document.createElement("div");
        div.className = "bear";
        div.innerHTML = b;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 5 + "s";
    el.style.animationDuration = 10 + Math.random() * 20 + "s";
}

// ---------------- QUESTION NAVIGATION ----------------
function showNextQuestion(num) {
    document
        .querySelectorAll(".question-section")
        .forEach(q => q.classList.add("hidden"));

    document
        .getElementById(`question${num}`)
        .classList.remove("hidden");
}

// ---------------- QUESTION 1 FIXED LOGIC ----------------
function setupQuestion1Logic() {
    const yesBtn = document.getElementById("yesBtn1");
    const noBtn = document.getElementById("noBtn1");
    const secretBtn = document.getElementById("secretAnswerBtn");

    // YES → DO NOTHING (stay here)
    yesBtn.addEventListener("click", () => {
        yesBtn.textContent = "Hmm… try again 😏";
    });

    // NO → SHOW SECRET ANSWER (CENTER)
    noBtn.addEventListener("click", () => {
        secretBtn.classList.remove("hidden");
    });

    // SECRET ANSWER → GO TO QUESTION 2
    secretBtn.addEventListener("click", () => {
        showNextQuestion(2);
    });
}

// ---------------- LOVE METER ----------------
const loveMeter = document.getElementById("loveMeter");
const loveValue = document.getElementById("loveValue");
const extraLove = document.getElementById("extraLove");

function setInitialPosition() {
    if (!loveMeter) return;
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = "100%";
}

if (loveMeter) {
    loveMeter.addEventListener("input", () => {
        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;

        if (value > 100) {
            extraLove.classList.remove("hidden");

            if (value >= 5000) {
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add("hidden");
        }
    });
}

// ---------------- CELEBRATION ----------------
function celebrate() {
    document
        .querySelectorAll(".question-section")
        .forEach(q => q.classList.add("hidden"));

    const celebration = document.getElementById("celebration");
    celebration.classList.remove("hidden");

    document.getElementById("celebrationTitle").textContent =
        config.celebration.title;
    document.getElementById("celebrationMessage").textContent =
        config.celebration.message;
    document.getElementById("celebrationEmojis").textContent =
        config.celebration.emojis;

    createHeartExplosion();
}

function createHeartExplosion() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML =
            config.floatingEmojis.hearts[
                Math.floor(Math.random() * config.floatingEmojis.hearts.length)
            ];
        document.querySelector(".floating-elements").appendChild(heart);
        setRandomPosition(heart);
    }
}

// ---------------- MUSIC PLAYER ----------------
function setupMusicPlayer() {
    const controls = document.getElementById("musicControls");
    const toggle = document.getElementById("musicToggle");
    const music = document.getElementById("bgMusic");
    const source = document.getElementById("musicSource");

    if (!config.music.enabled) {
        controls.style.display = "none";
        return;
    }

    source.src = config.music.musicUrl;
    music.volume = config.music.volume || 0.5;
    music.load();

    toggle.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            toggle.textContent = config.music.stopText;
        } else {
            music.pause();
            toggle.textContent = config.music.startText;
        }
    });
}
