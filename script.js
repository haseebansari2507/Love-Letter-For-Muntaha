const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

// No button moves away
function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// PC
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveButton();
});

// Extra safety
noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    moveButton();
});

// Yes button
yesBtn.addEventListener("click", function () {
    buttons.style.display = "none";
    message.style.display = "block";

    message.innerHTML = `
        ❤️🥹<br><br>
        Thank You! 💖<br>
        You just made my day! 🌹<br><br>
        I promise to always make you smile. 🥰
    `;
});