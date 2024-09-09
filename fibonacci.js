function fibs(n) {
    let arr = [0, 1]
    let [a, b] = arr
    if (n < 0) {
        return "Invalid Input:value should be greater than or equal to 0."
    }
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(c)
    }
    return arr;
}


function fibsRec(n) {
    console.log("This was printed recursively");

    if (n < 0) {
        return "Invalid Input: value should be greater than or equal to 0.";
    }

    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibs = fibsRec(n - 1);

    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(nextFib);

    return fibs;
}
console.log(fibsRec(5));
// This was printed recursively
// This was printed recursively
// This was printed recursively
// This was printed recursively
// [0, 1, 1, 2, 3]

fibs(5);  //[0, 1, 1, 2, 3]
fibs(-1);  //"Invalid Input:value should be greater than or equal to 0."
fibsRec(-1);  //"Invalid Input:value should be greater than or equal to 0."

