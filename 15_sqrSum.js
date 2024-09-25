/* Challenge 15 - sum of squares of elements in array

Process
----------- */

// 1st method - for loop
let sqrSum = (array)=>{

    let sum=0

    for (let i = 0; i < array.length; i++) {
        sum = sum + (array[i])**2
    }

    console.log('1st fn - sum of squares -')
    return sum

}

console.log( sqrSum( [3,4,8] ))


// 2nd method - map function

let sqrSum2 = (array)=>{

    let sum=0

    let arrSum = array.reduce( (sum,curVal)=>{

        sum = parseInt(sum) + (curVal)**2
        return sum

    }, 0)

    console.log('2nd fn - sum of squares..')

    return arrSum

}

console.log( sqrSum2( [10,9,10] ))