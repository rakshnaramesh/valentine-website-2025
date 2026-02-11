// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Kannu",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️",           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much 🤏",                                   // Text before the percentage
            nextBtn: "No wait… THIS MUCH♾️🤗❤️",                                         // Text for the next button
        },
        third: {
            text: "Who fell first?",                          // For the love meter
            startText: "You 😏",                                   // Text before the percentage
            nextBtn: "Okay fine… Me 🙈",                                         // Text for the next button
            secretAnswer: "But we both fell hard and that’s what matters 💕",           // Secret hover message
        },
        fourth: {
            text: "Am I your favorite person?",                          // For the love meter
            yesBtn: "Obviously ❤️",                                   // Text before the percentage
            noBtn: "Who else could it be? 😌",                                         // Text for the next button  
        },
        fifth: {
            text: "Do I make you happy?",                          // For the love meter
            yesBtn: "More than you know ❤️",                                   // Text before the percentage
            noBtn: "You are my happiness 🥺",                                         // Text for the next button  
            secretAnswer: "You’re my safe place.🌎" ,          // Secret hover message
        },
        sixth: {
            text: "If I’m sad, what will you do?",                          // For the love meter
            yesBtn: "Hug you tight 🤗",                                   // Text before the percentage
            noBtn: "Never let you be sad alone 💕",                                         // Text for the next button  
        },
        seventh: {
            text: "What am I to you?",                          // For the love meter
            yesBtn: "My favorite person ❤️",                                   // Text before the percentage
            noBtn: "My forever ❤️",                                         // Text for the next button  
            secretAnswer: "My home.",           // Secret hover message
        },
        eighth: {
            text: "If I annoy you?",                          // For the love meter
            yesBtn: "I’ll still love you 😌",                                   // Text before the percentage
            noBtn: "You’re my favorite problem 💕",                                         // Text for the next button  
        },
        nineth: {
            text: "Would you choose me again?",                          // For the love meter
            yesBtn: "In every lifetime ❤️",                                   // Text before the percentage
            noBtn: "Again and again 😘",                                         // Text for the next button  
            secretAnswer: "There was never another choice.😌",           // Secret hover message
        },
        tenth: {
            text: "Do you think about me?",                          // For the love meter
            yesBtn: "All the time 😌",                                   // Text before the percentage
            noBtn: "Only 24/7 😏",                                         // Text for the next button  
            secretAnswer: "Don’t lie… I live rent-free in your head." ,          // Secret hover message
        },
        eleventh: {
            text: "If I was next to you right now… what would you do?",                          // For the love meter
            yesBtn: "Hug you tight 🤗",                                   // Text before the percentage
            noBtn: "You know what would happen 🙈",                                         // Text for the next button  
            secretAnswer: "Careful… I might not let you go. 😈",           // Secret hover message
        },
        twelveth: {
            text: "Am I distracting?",                          // For the love meter
            yesBtn: "Very distracting 😩",                                   // Text before the percentage
            noBtn: "I can’t focus because of you 😈😌" ,                                        // Text for the next button  
        },
        thirteenth: {
            text: "Do I give you butterflies?",                          // For the love meter
            yesBtn: "A whole zoo 🦋",                                   // Text before the percentage
            noBtn: "My heart races every time 😌" ,                                        // Text for the next button  
        },
        fourteenth: {
            text: "Do I drive you crazy?",                          // For the love meter
            yesBtn: "In the best way 😌",                                   // Text before the percentage
            noBtn: "Completely 🔥"  ,                                       // Text for the next button  
        },
        fifteenth: {
            text: "If we were alone right now…",                          // For the love meter
            yesBtn: "Dangerous situation 😩",                                   // Text before the percentage
            noBtn: "Very dangerous 😈🔥",                                         // Text for the next button  
        },
        sixteenth: {
            text: "Do you want a kiss?",                          // For the love meter
            yesBtn: "Muwaahhhhh 😘💋",                                   // Text before the percentage
            noBtn: "Come here first 😏",                                         // Text for the next button  
            secretAnswer: "Nerla vaa mothamum tharen 🙈😘💋",           // Secret hover message
        },
        seventeenth: {
            text: "Are we cute together?",                          // For the love meter
            yesBtn: "The cootest couple 😎",                                   // Text before the percentage
            noBtn: "Goals 💕" ,                                        // Text for the next button  
        },
        eighteenth: {
            text: "If I steal your heart?",                          // For the love meter
            yesBtn: "Already yours ❤️",                                   // Text before the percentage
            noBtn: "You never had to steal it 💘",                                         // Text for the next button  
        },
        ninteenth: {
            text: "Do you see a future with me?",                          // For the love meter
            yesBtn: "A whole lifetime ❤️",                                   // Text before the percentage
            noBtn: "I already see us old together 🥺",                                         // Text for the next button  
        },
        twentieth: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Always ❤️",                                             // Text for "Yes" button
            noBtn: "Try clicking again 😉",                                                 // Text for "No" button
            secretAnswer: "Error 404: 'No' is not an option when it comes to us 💕"           // Secret hover message
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
