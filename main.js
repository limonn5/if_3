// let age = prompt('Введіть число')
// if(age>=14 && age<=90){
//     alert('Вірно')
// }
// else{
//     alert('Введіть інше значення')
// }


let a = +prompt('Введіть число')
let b = +prompt('Введіть число')
let c = +prompt('Введіть число')
console.log('a =', a)
console.log('b =', b)
console.log('c =', c)
if(a<b && a<c && b<c){
    console.log( a, b, c)
}
else if( a<b && a<c && b>c){
    console.log( a, c, b)
}
else if( a>b && a>c && b>c){
    console.log( c, b, a)
}
else if( a>b && a>c && b<c){
    console.log( b, c, a)
}
else if( c>b && a>b && a<c){
    console.log( b, a, c)
}
else {
    console.log (c, a, b)
}















