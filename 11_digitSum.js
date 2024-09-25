/* Challenge 11 - sum of digits of Number

Process
----------- */


let digSum = (num)=>{

let strN = num.toString()
let splitS = strN.split("")

let arSum = splitS.reduce(  (sum, cVal)=> {

        let sum2 = parseInt(sum) + parseInt(cVal)
        return sum2
    },  0)

console.log(`sum of idnvl nos in ${num} is..`)
return(arSum)

}


console.log( digSum(2989))