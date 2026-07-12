const btn = document.getElementById("giftBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {

    btn.disabled = true;

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    btn.innerHTML = "❤️ You're My Favorite Person ❤️";

    const photos = document.querySelectorAll(".hidden-photo");

    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add("show");

            // Scroll to each photo as it appears
            photo.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, index * 1500);
    });

   // Show the birthday message after the last photo
    setTimeout(() => {

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // After she has time to read, scroll to the final photo
    setTimeout(() => {

        document.getElementById("finalPhoto").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 7000);

}, photos.length * 1500 + 500);

});

// Balloon generator

const container = document.querySelector(".balloons");

const colors = [
    "#ff4d6d",
    "#ff595e",
    "#ffca3a",
    "#8ac926",
    "#1982c4",
    "#6a4c93",
    "#ff85a1",
    "#f15bb5",
    "#00bbf9",
    "#00f5d4",
    "#ffd166",
    "#ffffff"
];

const shapes = ["", "oval", "heart"];

function makeBalloon() {

    const b = document.createElement("div");

    const size = 30 + Math.random() * 90;

    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    b.className = "balloon " + shape;

    b.style.width = size + "px";
    b.style.height = size * 1.2 + "px";

    b.style.left = Math.random() * 100 + "vw";

    b.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    b.style.animationDuration =
        8 + Math.random() * 12 + "s";

    b.style.animationDelay =
        -Math.random() * 15 + "s";

    b.style.setProperty("--x1", -200 + Math.random() * 400);
    b.style.setProperty("--x2", -350 + Math.random() * 700);
    b.style.setProperty("--x3", -500 + Math.random() * 1000);
    b.style.setProperty("--x4", -700 + Math.random() * 1400);

    container.appendChild(b);

    setTimeout(() => b.remove(), 20000);
}

for (let i = 0; i < 70; i++) {
    makeBalloon();
}

setInterval(makeBalloon, 350);

