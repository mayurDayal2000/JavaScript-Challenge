// 10 days of Javascript
// This file is created by mayur

/* Explaination
const rectangle = (a, b) => {
    let area = a * b;
    let perimeter = 2*(a+b);

    let code1 = (perimeter + Math.sqrt(perimeter**2 - 16*area)) / 4;
    let code2 = (perimeter - Math.sqrt(perimeter**2 - 16*area)) / 4;

    let arr = [code1, code2];
    console.log(arr.sort());
}
*/

const sides = (literals, ...expressions) => {
    const [area, perimeter] = expressions;

    let side1 = (perimeter + Math.sqrt(perimeter ** 2 - 16 * area)) / 4;
    let side2 = (perimeter - Math.sqrt(perimeter ** 2 - 16 * area)) / 4;

    return ([side1, side2].sort());
}