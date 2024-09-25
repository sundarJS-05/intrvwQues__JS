/* Challenge 13 - count of vowels in string

Process
----------- */

let vowelCount = (string)=>{

    // create array of vowels
    let vowels = ['a','e','i','o','u']

    let strArray = string.split("")

    let count = 0

    for (let i = 0; i < strArray.length; i++) {

        if(strArray[i]== 'a' || strArray[i]== 'e' || strArray[i]== 'i' || strArray[i]== 'o' || strArray[i]== 'u'){
            count=count+1
        }
        else{
            count = count
        }
    
        console.log('inside the loop', count)
 
        
    }

    console.log('the count of vowels is..')
    return count

}


console.log( vowelCount('bsyyoouuuie'))