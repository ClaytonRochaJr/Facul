var as = "variavel var";
let bss = "variavel let";
const c = "variavel const";
console.log(`variaveis = ${as} ${bss} ${c}`);


let myarray = [1,2,3,4,5];
myarray.pop();
console.log(`tira o ultimo elemento ${myarray}`);
myarray.push(7);
console.log(`Adiciona um elemento no ultimo espaço ${myarray}`);
myarray.shift();
console.log(`Remove o primemiro elemento da array ${myarray}`);
myarray.unshift();
console.log();

let b = 5;
let a = 2;

console.log(`Soma ${a+b} | Subtração ${a-b} | Multiplicação ${a*b} | Divisão ${a/b}`);
console.log(` = ${a=b} | == ${a==b} | === ${a===b} | !=  ${a != b} | !== ${a!==b} |
    > ${a > b} | < ${a<b} | <= ${a<= b} | >= ${a>=b}`);

let idade = 25;

    if (idade < 13) {
        console.log("Você é uma criança.");
    } else if (idade >= 13 && idade < 18) {
        console.log("Você é um adolescente.");
    } else if (idade >= 18 && idade < 60) {
        console.log("Você é um adulto.");
    } else {
        console.log("Você é um idoso.");
    }


let possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Você pode dirigir.");
} else if (idade >= 18 && !possuiCarteira) {
    console.log("Você é maior de idade, mas precisa de uma carteira de motorista para dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

let frutas = ["maçã", "banana", "laranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

