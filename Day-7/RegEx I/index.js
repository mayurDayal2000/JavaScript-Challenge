// 10 days of Javascript
// This file is created by mayur

const regexVar = (check) => {
    let re = /^([aeiou]).+\1$/;
    return re;
}

/* Alternative without regex
const regexVar = (check) => {
    let firstNum = check[0];
    let secNum = check[check.length-1];
    let vowel = 'aeiou';
    let re;
    if(firstNum === secNum && check.length>=3 && vowel.includes(firstNum)){
        re = true;
    }else{
        re = false;
    }
    return re;
}
*/