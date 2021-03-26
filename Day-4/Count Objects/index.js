// 10 days of Javascript
// This file is created by mayur

const getCount = objects => {
    let num = 0;
    for (let object of objects) {
        num += (object.x == object.y);
    }
    return num;
}
