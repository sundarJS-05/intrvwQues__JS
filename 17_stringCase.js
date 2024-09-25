/* Challenge 17 - convert to camel & snake case

Process
----------- */



let snakeCase = (str)=>{

    splitArr = str.split(" ")
    let snakeCase = splitArr.join("-")

    return snakeCase


}


let camelCase = (str)=>{

    splitArr = str.split(" ")

    let indvl

    for (let j = 1; j < splitArr.length; j++) {

        indvl = splitArr[j][0].toUpperCase()
        console.log(indvl)
 
    }

    return indvl



    let camelCase = splitArr.join("")

    // return camelCase

}




console.log( snakeCase('this is one big and undending string'))
console.log( camelCase('this can be called second string'))