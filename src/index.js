const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


let counter = 0;

number.innerText = counter;

const updateText= () => {
    number.innerText = counter;
}

const handleAdd = () => {
    counter++;
    updateText();
}

const handleMinus = () => {
    counter--;
    updateText();
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);