let prime=0;
let num=99;
for(let i=1; i<=num; i++){
    if(num%i==0){
        prime++;
    }
}
if(prime==2){
    console.log(num,"It is a prime")
}else{
    console.log(num,"It is Not a prime");
}
