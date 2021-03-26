// 10 days of Javascript
// This file is created by mayur

const getMaxLessThanK = (n, k) => {
    let temp = 0;
    for (let i = n; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            let cond1 = (i & j) < k;
            let cond2 = (i & j) > temp;

            if (cond1 && cond2) {
                temp = (i & j);
            }
        }
    }
    return temp;
}