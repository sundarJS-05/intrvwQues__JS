/* Challenge 17 - convert to camel & snake case

Process
----------- */



let snakeCase = (str)=>{

    splitArr = str.split(" ")
    let snakeCase = splitArr.join("-")
    console.log("snakecase ->")
    return snakeCase

}


// let camelCase = (str)=>{
//     splitArr = str.split(" ")

//     let indvl
//     for (let j = 1; j < splitArr.length; j++) {

//         indvl = splitArr[j][0].toUpperCase()
//         console.log(indvl)
 
//     }

//     return indvl

//     let camelCase = splitArr.join("")

// }

let camelCase = (str)=>{

    splitArr = str.split(" ")

    let cmlCase = splitArr.map(  (curElm, index)=>{

        if(index==0) return curElm.toLowerCase()

        else{
            return (curElm[0].toUpperCase() + curElm.slice(1,curElm.length).toLowerCase( ))

        }

    })

    console.log("camelcase ->")

    return cmlCase.join("")

}



console.log( snakeCase('this is one big and undending string'))
console.log( camelCase('this can be called second string'))