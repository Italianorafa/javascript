// 5! = 5*4*3*2*1

/*function fatorial(n){
    let fat=1;
    for(let c=n; c>1; c--){
        fat*=c;
    }
    return fat
}*/

//RECURSIVIDADE
let fat = (n) => {
    if(n == 1){
        return 1;
    }
    else{
        return n*fat(n-1);
    }
}
console.log(fat(5))