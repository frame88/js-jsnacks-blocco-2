/*
jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, 
Gatsby vuole generare una falsa lista di invitati.
*/



let cognomi = ['rossi','bianchi','venditti','carlucci','wasozki'];
let nomi = ['alessio','myke','luis','jhonatan','loris'];
let newlist = falselist(cognomi, nomi);

function falselist(par1, par2) {
    let falsalista = [];
    for (let i = 0; i < par1.length; i++) {
        let i = Math.floor(Math.random() * (par1.length - 1)) + 1;
        let j = Math.floor(Math.random() * (par1.length - 1)) + 1;
        falsalista.push(par1[i] + ' ' + par2[j]);
    } 
    return falsalista;
}

console.log(newlist);


