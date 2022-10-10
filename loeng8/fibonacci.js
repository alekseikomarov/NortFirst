let esimeneNumber = 0;
let teineNumber = 1;

console.log('1. number on ' + esimeneNumber)
console.log('2. number on ' + teineNumber)
for(let i = 3; i <= 10; i++){
    let summa = esimeneNumber + teineNumber;
    console.log(i + '. number on ' + summa);
    esimeneNumber = teineNumber;
    teineNumber = summa;
}
