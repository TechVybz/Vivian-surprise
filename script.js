// =========================================
// VIVIAN SURPRISE WEBSITE
// script.js
// =========================================


// =========================================
// GET HTML ELEMENTS
// =========================================

const openButton =
    document.getElementById("openButton");

const openingScreen =
    document.getElementById("openingScreen");

const robotMessage =
    document.getElementById("robotMessage");


// =========================================
// ROBOT MESSAGES
// =========================================

const messages = [

    "Hello Vivian! 🌸",

    "Welcome to your little surprise! ❤️",

    "You deserve beautiful moments. 🌷",

    "Keep smiling, beautiful soul. 🌺",

    "May happiness always find you. 🌻",

    "And may your days be filled with joy. 💐",

    "This little garden was created just for you. ❤️"

];


// =========================================
// OPEN SURPRISE
// =========================================

openButton.addEventListener("click", function () {

    openingScreen.classList.add("hide");

    startRobotMessages();

    createHearts();

});


// =========================================
// ROBOT MESSAGE ANIMATION
// =========================================

function startRobotMessages() {

    let messageIndex = 0;

    robotMessage.textContent =
        messages[messageIndex];


    setInterval(function () {

        messageIndex++;

        if (messageIndex >= messages.length) {

            messageIndex = 0;

        }

        robotMessage.style.opacity = "0";


        setTimeout(function () {

            robotMessage.textContent =
                messages[messageIndex];

            robotMessage.style.opacity = "1";

        }, 400);

    }, 3000);

}


// =========================================
// CREATE FLOATING HEARTS
// =========================================

function createHearts() {

    setInterval(function () {

        const heart =
            document.createElement("span");

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💕";


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-40px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex =
            "5";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 6s linear, opacity 6s linear";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.style.transform =
                `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);


        setTimeout(function () {

            heart.remove();

        }, 6500);


    }, 700);

}