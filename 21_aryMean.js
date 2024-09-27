/* Challenge 21 - mean of an array of nos.

Process
----------- */

let aryMean = (ary)=>{

    let arSum = 0

    for (let i = 0; i < ary.length; i++) {
        arSum = arSum + ary[i]
     
    }

    let aryMean = arSum/(ary.length)

    console.log('array mean is->')
    return aryMean

}

console.log( aryMean([1,2,7,5,7]))