const pi = 3.14;

function calculateKerucutVolume(r, t) {
    let d = r ** 2;
    let v = (pi * d * t)/3;

    return v;
}

function calculatorBolaVolume(r) {
    let x = r ** 3;
    let y = 4 * (pi * x);
    let v = y /3;

    return v;
}

console.log("Volume Kerucut = ");
console.log(calculateKerucutVolume(5, 10));
console.log("Volume Bola = ");
console.log(calculatorBolaVolume(5));