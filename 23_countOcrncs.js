/* Challenge 23 - count occurences of elements - as key(elem) & value(occur of that element) pair

Process
----------- */


let nos = [2,2,3,2,4,3,3,4,2,2]

// creating an empty object
let counts = {}

// creating key value pairs of elem & ocrncs with for loop
for (const j of nos) {

    // 0 after '||' is for no. only occuring once
    counts[j] = (counts[j] || 0) + 1
    
}

console.log(counts)
