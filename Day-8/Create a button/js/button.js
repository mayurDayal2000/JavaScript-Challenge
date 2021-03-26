// 10 days of Javascript
// This file is created by mayur

const btn = document.querySelector('button');
let initial = 0;
    
btn.addEventListener('click', e => {
    btn.textContent = ++initial;
})