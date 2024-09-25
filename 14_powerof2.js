/* Challenge 14 - number is Power of 2 OR not?

Process
----------- */

let powerOf2 = (num)=>{

    let power = false

    for (let i = 0; i < num; i++) {
        if(2**i==num){
            console.log(`${num} is the ${i}th power of 2`)
            power = true  
        }
    
    }
    return power

}


console.log( powerOf2(1024) )
