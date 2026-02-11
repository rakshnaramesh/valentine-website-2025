const config = window.VALENTINE_CONFIG;
const questions = Object.values(config.questions);

let currentIndex = 0;

// Elements
const titleEl = document.getElementById("valentineTitle");
const questionText = document.getElementById("questionText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const secretBox = document.getElementById("secretAnswer");
const secretBtn = document.getElementById("secretBtn");

const loveSection = document.getElementById("loveMeterSection");
const loveQuestion = document.getElementById("loveQuestion");
const loveMeter = document.getElementById("loveMeter");
const loveValue = document.getElementById("loveValue");
const startText = document.getElementById("startText");
const extraLove = document.getElementById("extraLove");
const nextLoveBtn = document.getElementById("nextLoveBtn");

const celebration = document.getElementById("celebration");

// Init
document.title = config.pageTitle;
titleEl.textContent = `${config.valentineName}, my love…`;

loadQuestion();

// =========================
// QUESTION LOADER
// =========================
function loadQuestion() {
    secretBox.classList.add("hidden");
    loveSection.classList.add("hidden");

    const q = questions[currentIndex];
    if (!q) return;

    // Love meter question
    if (q.startText) {
        loveSection.classList.remove("hidden");
        loveQuestion.textContent = q.text;
        startText.textContent = q.startText;
        nextLoveBtn.textContent = q.nextBtn;
        return;
    }

    questionText.textContent = q.text;
    yesBtn.textContent = q.yesBtn;
    noBtn.textContent = q.noBtn;

    // Special behavior for FIRST question
    if (currentIndex === 0) {
        yesBtn.onclick = () => {};
        noBtn.onclick = () => showSecret(q.secretAnswer);
    } else {
        yesBtn.onclick = nextQuestion;
        noBtn.onclick = nextQuestion;
    }
}

// =========================
// SECRET ANSWER
// =========================
function showSecret(text) {
    secretBtn.textContent = text;
    secretBox.classList.remove("hidden");
    secretBtn.onclick = nextQuestion;
}

// =========================
// NEXT QUESTION
// =========================
function nextQuestion() {
    currentIndex++;

    if (currentIndex >= questions.length) {
        showCelebration();
    } else {
        loadQuestion();
    }
}

// =========================
// LOVE METER
// =========================
loveMeter.addEventListener("input", () => {
    const value = loveMeter.value;
    loveValue.textContent = value;

    if (value > 100) {
        extraLove.classList.remove("hidden");
        if (value > 5000) extraLove.textContent = config.loveMessages.extreme;
        else if (value > 1000) extraLove.textContent = config.loveMessages.high;
        else extraLove.textContent = config.loveMessages.normal;
    } else {
        extraLove.classList.add("hidden");
    }
});

nextLoveBtn.onclick = nextQuestion;

// =========================
// CELEBRATION
// =========================
function showCelebration() {
    document.getElementById("questionContainer").classList.add("hidden");
    loveSection.classList.add("hidden");

    celebration.classList.remove("hidden");
    document.getElementById("celebrationTitle").textContent = config.celebration.title;
    document.getElementById("celebrationMessage").textContent = config.celebration.message;
    document.getElementById("celebrationEmojis").textContent = config.celebration.emojis;
}
