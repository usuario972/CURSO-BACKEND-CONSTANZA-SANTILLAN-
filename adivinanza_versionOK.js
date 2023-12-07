const readlineSync = require('readline-sync');
GNA=()=>{return Math.floor(Math.random()*100);}
let na=GNA()
let npu
let c=1
for (c=1; na!=npu; c++)
{ 
console.log(na)  
console.log(typeof c+c)
console.log(typeof na)  
npu=readlineSync.question('Ingresa un numero: ')
if (npu > na) 
{console.log('El numero secreto es menor a'+npu+'. ¡Sigue intentando!')} 
else {if (npu<na){console.log('El numero secreto es mayor a'+npu+'. ¡Sigue intentando!'); }}
};
console.log('Felicitaciones! Adivinaste en'+c+ ' intentos')
console.log(c)

//el número secreto era '+npu+'. Lo adivinaste en '+c+' intentos.'