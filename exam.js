// var a = 42
// console.log(a.toString(2))

// var b = 101010

// console.log(parseInt(b, 2))

/* ================================================ */

// console.log(Number.isInteger(12));
// console.log(Number.parseFloat(12));
// console.log(Number.parseInt(12));
// console.log((12).toFixed());

/* ======================================= */

// console.log(eval("12+2 -2 * 2 / 2"))

/* ============================================= */

// function getNumber(a = 0, b = 1) {
//     console.log(a + b);
// }
// (getNumber(3));

/* ================================================ */

// function getNumber(a = 0, b = 1) {
//     return b;
//     }
//     console.log(getNumber(2) * 3);


/* ================================================ */
// var x
// if (!x) {
// console.log(!x ? 1 : '2');
// } if (!x) {
// console.log(x ? '3' : '4')
// }

/* ===================================== */

// let arr = 'JavaScript'.split('')
// console.log(arr.slice(2,4))
// console.log(arr.splice(2,4))
// console.log(arr)

/* =========================================== */

// function func(par){
//   return   par.filter((v, i ) => par.indexOf(v) == i)
// }
// console.log(func([1,2,3,3,4,4,5,5,6,6,]))

/* ============================================= */

// console.log(`${2}+${2}`)

// console.log('2+2')
// console.log(`2+2`)


/* ============================================== */
// console.log((`${2}+${2}`) * 3);

/* ============================================= */

// var STR = 'W3BBRA1N IS NUMBER 1';

// function count(num){ 
//     let answer = []  
//     let arr = num.replace(/[a-z]/gi, '').split('')
//     return eval(arr.filter(v =>  Number(v)).join('+'))
// }
// console.log(count("W3BBRA1N IS NUMBER 1"))


// function count(param){ 
//     let str =  ''
//    for(let i=0; i<param.length; i++){
//    if( Number(param[i])){
//     str += param[i]
//    } 
//     }
//    return eval(str.split('').join('+'))
// }
// console.log(count("W3BBRA1N IS NUMBER 1"))


// function sum(param){
//     return eval(param.match(/[0-9]/g).join('+'))
// }
// console.log(sum("W3BBRA1N IS NUMBER 1"))

/* ====================== */

// function name(par){
//     return par.replace(/[a-z]/ig, '$&$&' )
// }
// console.log(name("hello"))

// let doubleChar = str => str.replace(/./g,'$&$&');
// console.log(doubleChar('fdjaf'))


// arr = [3,4,5]
// arr.map((value)=> {
//     var sum = Math.pow(value,3)
//     var sol = sum.reduce((a,b) => a+b)
// })
// console.log(sum);
// console.log(typeof typeof (4*4))


// let obj = {a:1}
// for(let i of obj){
//     console.log(i)
// }
