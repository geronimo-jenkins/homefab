const  n = parseInt(prompt('Введіть n - номер числа Фабіоначчі, яке хотіли б дізнатись: '));

function fab(n){
    n= ( Math.pow((Math.sqrt(5)+1)/2, n) - Math.pow((1-Math.sqrt(5))/2,n)) / Math.sqrt(5)
    return n;
}

document.write('<h2>Це число: </h2>' + fab(n));