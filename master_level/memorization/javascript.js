// ___________________Memorization_______________________
"use strict";
// - Definición -> .
// - Ejemplos de uso -> .
let cache = [];

const memorizar = func => {
    return (e) => {
        const index = e.toString();
        if (cache[index] == undefined) {
            cache[index] = func(e);
        }
        return cache[index];
    }
}

const hacerAlgo = (num) => {
    const a = 10;
    const b = 20;
    let c = 0;
    for (let i = (num-1); i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            c += a*b;
        }
    }
    return c;
}

// Sin memorization...
const date = new Date();
hacerAlgo(60000);
console.log(new Date() - date);

const date2 = new Date();
hacerAlgo(60000);
console.log(new Date() - date2);

const date3 = new Date();
hacerAlgo(60000);
console.log(new Date() - date3);

const date4 = new Date();
hacerAlgo(60000);
console.log(new Date() - date4);

// Con memorization...
const memo = memorizar(hacerAlgo);
const date5 = new Date();
memo(60000);
console.log(new Date() - date5);

const date6 = new Date();
memo(60000);
console.log(new Date() - date6);

const date7 = new Date();
memo(60000);
console.log(new Date() - date7);

const date8 = new Date();
memo(60000);
console.log(new Date() - date8);