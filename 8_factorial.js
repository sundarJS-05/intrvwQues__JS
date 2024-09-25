/* Challenge 8 - factorial

Process
----------- */


let factorial = (num)=>{

    let factorial=1

    for (let i = 1; i <= num; i++) {
        factorial = factorial*i
        console.log('inside loop', factorial)    
    }

    console.log('factorial is...')
    return factorial

}


// console.log( factorial(45) )
console.log( factorial(7) )