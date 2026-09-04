// ===============================
// START THE BIRTHDAY JOURNEY
// ===============================

function startJourney() {
    const birthdaySection = document.getElementById("birthday");

    birthdaySection.scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// FLOATING HEARTS
// ===============================

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓"
];

function createHeart() {

    const heart = document.createElement("div");

    // Select random heart
    heart.innerHTML =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    // Position
    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    // Random size
    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    // Make sure heart stays above the page
    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";

    // Smooth animation
    heart.style.transition =
        "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);


    // Start moving upward
    setTimeout(function () {

        heart.style.transform =
            "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = "0";

    }, 100);


    // Remove heart after animation
    setTimeout(function () {

        heart.remove();

    }, 6500);
}


// Create a heart every 700 milliseconds
setInterval(createHeart, 700);