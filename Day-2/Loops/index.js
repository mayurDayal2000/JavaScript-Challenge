// 10 days of Javascript
// This file is created by mayur

const vowelsAndConsonants = (s) => {
    let vowel = "aeiou";
    let conson = "";

    for(let a=0; a<s.length; a++){
        if(vowel.includes(s[a])){
            console.log(s[a]);
        }else{
            conson += s[a] + '\n';
        }
    }
    console.log(conson);
}