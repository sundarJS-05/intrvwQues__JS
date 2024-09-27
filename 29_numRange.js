/* Challenge 29 - number range generator

Process
----------- */

// a - start; b - end
let numberRange = (a,b)=>{
    
    let numRange = []

    for (let j = a; j <= b; j++) {
        numRange.push(j)
      
    }
    return numRange

} 

console.log( numberRange(-3, 5) )