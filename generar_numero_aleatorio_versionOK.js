let cvcero=0
let cvuno=0
let cvdos=0
let cvcien=0
let na
let LISTANA=[]

// GNA genera números aleatorios entre 0 y 99 ambos inclusive
GNA=()=>{return Math.floor(Math.random()*100);}

for(let i=0;i<=25000;i++)
    {na=GNA()
        if(na==0){cvcero=cvcero+1};
        if(na==1){cvuno=cvuno+1};
        if(na==2){cvdos=cvdos+1};
        if(na==100){cvcien=cvcien+1};
        console.log("numero "+i+": "+GNA()+typeof na);
        LISTANA.push(na);
    }


console.log('cvcero= '+cvcero)
console.log('cvuno= '+cvuno)
console.log('cvdos= '+cvdos)
console.log('cvcien= '+cvcien)
console.log(typeof GNA)

// muestra parte de la Lista de nùmeros aleatorios generados
//for(i=0;i<=50;i++)
//{console.log(LISTANA[i])}
