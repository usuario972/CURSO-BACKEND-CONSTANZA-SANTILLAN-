// permite importar módulo de datos aleatorios
const Variable=require('chance')
const d= new Variable();

//acá se generan los datos aleatorios
const randomName=d.name();
const randomAge=d.age();
const randomEmail=d.email();

//permite ingresar un dato al usuario
const readlineSync = require('readline-sync');
let cd=readlineSync.question("Ingrese la cantidad de datos aleatorios a generar: ")

NN=[]
EE=[]
DM=[]
console.log('cantidad de datos a generar '+cd)
for (let n=1;n<=cd;n++)
{console.log('dato '+n)
console.log('Nombre aleatorio: '+d.name());
console.log('Edad aleatoria: '+d.age());
console.log('Email aleatorio: '+d.email());
NN.push(d.name());
EE.push(d.age());
DM.push(d.email())
}

console.log('   Nombre aleatorio    Edad aleatoria         Email aleatorio')
for (n=1;n<=cd;n++)
{
console.log('Dato '+n+'   '+NN[n-1]+'   '+EE[n-1]+'años      '+DM[n-1])
}

let cem25=0
for (n=1;n<=cd;n++)
{ if (EE[n-1]>=25) {cem25=cem25+1}

console.log(cem25)


}