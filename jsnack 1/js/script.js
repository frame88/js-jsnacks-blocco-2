let cognomi = ['rossi','bianchi','venditti','carlucci','wasozki'];
let nomi = ['alessio','myke','luis','jhonatan','loris'];
let falsalista = [];

for (let i = 0; i < cognomi.length; i++) {
    let i = Math.floor(Math.random() * cognomi.length) + 1;
    let j = Math.floor(Math.random() * cognomi.length) + 1;
    falsalista.push(cognomi[i] + nomi [j]);
}

console.log(falsalista);


/*
jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, 
Gatsby vuole generare una falsa lista di invitati.
*/