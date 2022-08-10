
let newNum = 0;

const answer = document.querySelector('h2');
const addButton = document.querySelector('#button1');
const subtractButton = document.querySelector('#button2');
const input = document.querySelector('#text');


//Subtraction
subtractButton.addEventListener("click", () => {
    newNum -= parseInt(input.value);
    answer.textContent = newNum;
    if (newNum < 0){
        answer.style.color = 'red';
    } else {
        answer.style.color = 'black';
    }
});

//Addition+
addButton.addEventListener("click", () =>{
    newNum += parseInt(input.value);
    answer.textContent = newNum;
    if (newNum < 0){
        answer.style.color = 'red';
    } else {
        answer.style.color = 'black';
    }
});