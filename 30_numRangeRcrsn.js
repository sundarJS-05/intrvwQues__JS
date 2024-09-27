/* Challenge 30 - number range generator using recursion

Process
----------- */

let recurRange = (a,b, arr=[])=>{

    if(a<=b){
        arr.push(a)
        recurRange(a+1,b,arr)

    }
    return arr
}

console.log( recurRange(1,5))