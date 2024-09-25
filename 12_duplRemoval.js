/* Challenge 12 - removes duplciate values from array

Process
----------- */

let removeDupl = (array)=>{

    let set = new Set(array)
    console.log('unqiue value array is')
    return [...set]

}



console.log(  removeDupl([1,2,2,4,5,5,5,6,2]) )