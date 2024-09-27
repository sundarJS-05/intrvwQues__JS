/* Challenge 24 - mode of an array of nos.

Process
----------- */

let mode = (ary)=>{

let counts = {}
let maxNum = 0
let mode

for (let j of ary) {
    counts[j] = (counts[j] || 0) + 1

    if( counts[j] > maxNum) {
        maxOccr = counts[j]
        mode = j
    }
}

console.log('elem occurence obj is', counts)

console.log(`maximum occurence are ${maxOccr}; mode is `)

return mode

// let values = Object.values(counts)
// console.log('values of occurences are', values)

}

console.log( mode([2,3,4,2,5,2,3]))

