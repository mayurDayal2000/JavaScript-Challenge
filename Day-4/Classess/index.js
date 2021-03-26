// 10 days of Javascript
// This file is created by mayur

class Polygon {
    constructor(a) {
        this.a = a;
    }

    perimeter() {
        let peri = 0;
        for (let i = 0; i < this.a.length; i++) {
            peri += this.a[i];
        }
        return peri;
    }
}
