/* Challenge 10 - find if 2 given arrays are equal

Process
----------- */


let arEql = (ar1, ar2)=>{

    if(ar1.length != ar2.length){
        console.log('lengths not equal')
    }

    else{
        console.log('lengths are equal')

        let arCheck =  ar1.every( (currVal, index)=> {
            if(currVal === ar2[index]){
                console.log('elements are equal')
            }

            else{
                console.log('array elemsn NOt equal')
            }
        })

        // return arCheck
       }
}


// console.log( '1st..', arEql([1,2,7,3,6], [1,7,6]))
console.log( '2nd...', arEql([1,2,7,3,6], [1,2,7,3,6]))
console.log( '3rd...', arEql([1,3,8,4], [2,3,7,9]))