/* Challenge 7 - tell max value no. in an array

Process
----------- */

// 1st method - using sort()
let findMax = (array)=>{
    let sortedArr = array.sort(  (a,b) => (b-a))

    console.log('the largest no in array is')
    return ( sortedArr[0] )


}

/* spread operator converts array of nos into individual nos
// let ary = [1,2,56,35,36, 24, 77]
// console.log( typeof ary )
// let a = [...ary]
// let c = {...ary}
// console.log(`type of a is ${typeof a}, c is ${typeof c}`)
// console.log(`a is ${a}, c is ${c}`)   */


console.log( findMax([23,25,-2355,-125,23]) )

console.log( findMax([-3,2,-1.5,-2.5,0]) )