/* Challenge 27 - repeat a string X no of time
function should have 2 parmas: 1st - the string; 2nd - no of repetitions

Process
----------- */

// 1st method
let repeatString = (str, n)=>{

    if(n==0) return str

    let finalStr

    for (let j = 1; j <= n; j++) {
        finalStr = str.repeat(j)     
    }
    console.log(`the string recurring ${n} times is -> `)
    return finalStr

}

console.log(  repeatString('xdf', 2))