const buttonElement = document.querySelector('button');
const currentColor = document.querySelector('span');
const body = document.body;
console.log(currentColor.textContent);

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

buttonElement.addEventListener('click', () => {
    body.style.backgroundColor = randomColorGenerator();
    currentColor.textContent = randomColorGenerator();
})