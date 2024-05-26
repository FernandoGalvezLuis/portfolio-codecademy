const pgColorButton = document.querySelector('.pg-color');
let colorCounter = 1;
pgColorButton.onclick = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    document.documentElement.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    pgColorButton.innerHTML = `Changed ${colorCounter} time/s!`;
    colorCounter=++colorCounter;
};
