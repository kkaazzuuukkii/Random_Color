const button = document.querySelector('.btn');
const color = document.querySelector(".color");

const hex = '0123456789ABCDEF'

const hexarray = hex.split('')

function colorselect(){
    let hexColor = generateHex();

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
}


function generateHex() {
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hexarray.length);
}