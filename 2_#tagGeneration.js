/* Challenge - generate # tag from a string

Process
----------- */

/* using slice & substring fns - altenate way
// let str = 'dsfdwstdftr'
// let str5 = str.substring(3,str.length)
// str5 = str.slice(1,str.length)
// console.log('str5 is',str5) */

let generateHash = (str)=>{

    if(str.length > 280 || str.trim().length == 0 ){
        return false
    }


        // convert to array
        arrayFormat = str.split(" ")
        // console.log(arrayFormat, '\n', typeof arrayFormat )

        // this will return the ans; but have to do it for each string
        // console.log(arrayFormat[3].toUpperCase())

        // we can use either forEach or map to iterate;
        // since forEach doesnt return a value, while map does; we use map

        let outputInter = arrayFormat.map(  (currentElem)=>{

            // returns the 1st letter of each word
            // console.log(currentElem[0])

            // make 1st letter of each word captial
            return  currentElem.replace( currentElem[0], currentElem[0].toUpperCase() ) 
    
        })
        // console.log(outputInter)

        console.log("#tag is...............")
        outputFinal = `#${outputInter.join("")}`
        return outputFinal


}


console.log( generateHash("these words form a good hashtag") )