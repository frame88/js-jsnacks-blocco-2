/*
jsnack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in 
posizione dispari
*/

let piero = jsnack2();

function jsnack2() {
    let accumulator = 0;
    demo = [];

    for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
        demo.push(Math.floor(Math.random() * 10) + 1);
    }

    for (let j = 0; j < demo.length; j++) {
        if (j % 2 != 0) {
            accumulator += demo[j];
        }
    }
    
    return accumulator;
}

console.log(demo);
console.log(piero);
