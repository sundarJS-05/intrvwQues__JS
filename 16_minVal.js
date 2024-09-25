/* Challenge 16 - minimum value in array

Process
----------- */

let minVal = (array)=>{
    // asc. sort
    let sortArr = array.sort( (a,b)=>(a-b))

    // 1st elm - largest
    console.log('min value is..')
    return sortArr[0]

}

console.log(  minVal([-2.02,-2.01,-2,1.98,2.02]))