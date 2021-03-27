//10 days of Javascript
//This file is created by mayur
const body = document.querySelector('body');
const template =
    `
<div id="container">
<div id="res"></div>
<div id="btns">
    <button id="btn0">0</button>
    <button id="btn1">1</button>
    <button id="btnClr">C</button>
    <button id="btnEql">=</button>
    <button id="btnSum">+</button>
    <button id="btnSub">-</button>
    <button id="btnMul">*</button>
    <button id="btnDiv">/</button>
</div>
</div>
`;

const calc = () => {
    const res = document.querySelector('#res');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            let action = e.target.textContent;

            switch (action) {
                case 'C':
                    res.textContent = '';
                    break;

                case '=':
                    const [exp1, exp2] = res.textContent.match(/\d+/gm);
                    const [operate] = res.textContent.match(/\D/gm);
                    const formula = parseInt(exp1, 2) + operate + parseInt(exp2, 2);
                    res.textContent = Math.trunc(eval(formula).toString(2));
                    break;

                default:
                    res.textContent += action;
                    break;
            }

        })
    })
}

const working = () => {
    body.innerHTML = template;
    calc();
}

working();