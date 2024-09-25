/* Challenge 9 - average

Process
----------- */


// 1st method - using for loop
let findAvg = (array)=>{

            let arrAct = Array.from(array) 
            let sum = 0

            for (let i = 0; i < arrAct.length; i++) {
                
                sum = sum + arrAct[i]
                
            }
            console.log('sum of ary elemsn is', sum)
            let avg = sum/(arrAct.length)

            console.log('average is...')
            return (avg)

}

console.log( 'function1 execution..')
console.log(  findAvg([1,4,5,24,46,57,3]) )


// 2nd method - using reduce()

let findAvg2 = (array)=>{

    let sum = array.reduce( (sum, curElem)=> {
        let arSum = sum+curElem
        return arSum
    } , 0)

    console.log( 'sum of ary elemns',sum)

    let avg = sum/(array.length)
    console.log('avg is..')
    return avg

}

console.log('function2 execution...')
console.log(  findAvg2([1,21,25,16,17]) )





