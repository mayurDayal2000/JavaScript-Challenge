// 10 days of Javascript
// This file is created by mayur

const isPositive = (a) => {

    if (a > 0) return "YES";
    if (a == 0) throw new Error("Zero Error");
    else throw new Error("Negative Error");

}