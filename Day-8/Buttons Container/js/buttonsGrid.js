// 10 days of Javascript
// This file is created by mayur

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

btn5.addEventListener('click', () => {
    const temp = btn1.textContent;
    btn1.textContent = btn4.textContent;
    btn4.textContent = btn7.textContent;
    btn7.textContent = btn8.textContent;
    btn8.textContent = btn9.textContent;
    btn9.textContent = btn6.textContent;
    btn6.textContent = btn3.textContent;
    btn3.textContent = btn2.textContent;
    btn2.textContent = temp;
})