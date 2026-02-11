const config = window.VALENTINE_CONFIG;

const questions = Object.values(config.questions);
let currentIndex = 0;

const questionText = document.getElementById("questionText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hoverText = document.getElementById("hoverText");

function loadQuestion() {
    const q = questions[currentIndex];

    questionText.textContent = q.text;
    yesBtn.textContent = q.yesBtn || "Yes";
    noBtn.textContent = q.noBtn || "No";

    hoverText.classList.add("hidden");
    hoverText.textContent = "";

    // Last question
    if (currentIndex === questions.length - 1) {
        yesBtn.onclick = celebrate;
        noBtn.onclick = () => showHover(q.secretAnswer || "Nice try 😌");
        return;
    }

    yesBtn.onclick = () => handleAnswer(q, "yes");
    noBtn.onclick = () => handleAnswer(q, "no");
}

function handleAnswer(question, type) {
    const message =
        question.secretAnswer ||
        (type === "yes"
            ? "That made my heart melt ❤️"
            : "Still choosing you 😏");

    showHover(message);

    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 1500);
}

function showHover(text) {
    hoverText.textContent = text;
    hoverText.classList.remove("hidden");
}

function celebrate() {
    document.querySelector(".question-section").classList.add("hidden");
    const c = document.getElementById("celebration");
    c.classList.remove("hidden");

    document.getElementById("celebrationTitle").textContent =
        config.celebration.title;
    document.getElementById("celebrationMessage").textContent =
        config.celebration.message;
    document.getElementById("celebrationEmojis").textContent =
        config.celebration.emojis;
}

function createFloatingElements() {
    const container = document.querySelector(".floating-elements");
    setInterval(() => {
        const span = document.createElement("span");
        span.textContent =
            config.floatingEmojis.hearts[
                Math.floor(Math.random() * config.floatingEmojis.hearts.length)
            ];
        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDuration = 8 + Math.random() * 6 + "s";
        container.appendChild(span);

        setTimeout(() => span.remove(), 14000);
    }, 600);
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("valentineTitle").textContent =
        `${config.valentineName}, my love 💖`;

    createFloatingElements();
    loadQuestion();
});
