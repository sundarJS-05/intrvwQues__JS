
/* Challenge - Find the longest word in a string

Process
----------- */


// convert string to array

let findLongestWord = (str)=>{

    // remove whitespaces & return false if length -0
    if(str.trim().length == 0){
        return false
    }

    else{

        // covert sentence into array of indvl. words using delimiter as space 
        let stringArray = str.split(" ")
        // console.log(stringArray)

        // sort array - based on unicode values (A comes before a in ascedning order)
        let wordComparison = stringArray.sort()
        // console.log(wordComparison)

        // using A-B sorting function - descending order
        wordComparison = stringArray.sort( (a,b)=> ( b.length -a.length ) )
        // console.log(wordComparison)

        // returning longest word - which is 1st array element
        console.log('longest word in sentence is...' )
        return (wordComparison[0])

    }

}


console.log(findLongestWord("this is a random Long sentence that Just keeps going on!"))
