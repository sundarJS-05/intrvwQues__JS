/* Challenge 22 - reverse median of an array of nos.

Process
----------- */


let median = (ary)=>{

    let ascAry = ary.sort( (a,b)=>(a-b))

    if( (ascAry.length%2) ==0 ) {
        return `median is ${ ( ascAry[(ascAry.length/2)] + ascAry[(ascAry.length/2)-1] )/2 }`
    }

    else{
        return `median is ${ascAry[ (ascAry.length-1)/2 ] }`
    }

}

console.log( median([2,3,-5, 11, -4, 8]))