// 10 days of Javascript
// This file is created by mayur

const reverseString = (s) => {

    // split() - split a string into an array
    // reverse() - reverse the order of elements in an array
    // join() - return the array as string

    try {

        // chain the three above methods together
        let reversed = s.split("").reverse().join("");
        console.log(reversed);

    } catch (error) {
        console.log(error.message + '\n' + s);
    }
}
