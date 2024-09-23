/* Challenge 5 - sort nos in array in Asc. order

Process
----------- */


let sortAsc = (arr)=>{

    targetArr = Array.from(arr)

    targetArr.map(  (x) => x )

    // using a,b sort - which is however NOT allowed for this challenge
    let sortedArr = targetArr.sort( (a,b)=> (a-b))
    console.log('sorted array is', sortedArr)

}


console.log(  sortAsc([1,4,234,205, 146]) )
console.log(  sortAsc([234,25,65,562,27]) )
