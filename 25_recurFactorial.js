/* Challenge 25 - factorial using recursion

Process
----------- */

let recurFactorial = (num)=>{

    if(num==1) {
        return 1
    }

    return num * recurFactorial(num-1)

}


console.log( recurFactorial(7) )