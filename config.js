const CONFIG = {

    valentineName: "Kannu",
    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // 💖 QUESTIONS (ADD AS MANY AS YOU WANT)
    questions: [
        {
            text: "Do you like me?",
            yesBtn: "Yes ❤️",
            noBtn: "No 😌",
            secretAnswer: "I don't like you… I love you 💕"
        },
        {
            text: "How much do you love me?",
            type: "love-meter",
            startText: "This much 🤏",
            nextBtn: "NO WAIT… THIS MUCH ♾️❤️"
        },
        {
            text: "Who fell first?",
            yesBtn: "You 😏",
            noBtn: "Okay fine… Me 🙈"
        },
        {
            text: "Am I your favorite person?",
            yesBtn: "Obviously ❤️",
            noBtn: "Who else 😌"
        },
        {
            text: "Do I make you happy?",
            yesBtn: "More than you know ❤️",
            noBtn: "You are my happiness 🥺"
        },
        {
            text: "If I’m sad, what will you do?",
            yesBtn: "Hug you tight 🤗",
            noBtn: "Never let you be sad alone 💕"
        },
        {
            text: "Would you choose me again?",
            yesBtn: "In every lifetime ❤️",
            noBtn: "Again and again 😘"
        },
        {
            text: "Do you see a future with me?",
            yesBtn: "A whole lifetime ❤️",
            noBtn: "I already see us old together 🥺"
        },
        {
            text: "Will you be my Valentine on Feb 14, 2026? 🌹",
            yesBtn: "Always ❤️",
            noBtn: "Try clicking again 😉"
        }
    ],

    loveMessages: {
        extreme: "WOOOW 😳 THAT MUCH LOVE?? 💝🚀",
        high: "To infinity and beyond 🚀💖",
        normal: "And beyond 🥰"
    },

    celebration: {
        title: "YAYYY! I’M SO LUCKY 💖🎉",
        message: "Come here… hug and kiss loading 😘🤗",
        emojis: "💝💋🤗🎉❤️"
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
