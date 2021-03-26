// 10 days of Javascript
// This file is created by mayur

/* Explanation
const modifyArray = (nums) => {
    for (let i = 0; i < nums.length; i++) {

        let num = (nums[i] % 2 === 0) ? (nums[i] * 2) : (nums[i] * 3);
        return num;
    }
}
*/

const modifyArray = (nums) => {
    const arrowFun1 = (num) => num = (num % 2 === 0) ? (num * 2) : (num * 3);
    return nums.map(arrowFun1);
}