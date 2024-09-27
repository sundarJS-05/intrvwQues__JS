/* Challenge 26 - return the nth number in fibonacci series

Process
----------- */

// 1st method - recursion
let fibSeqNum = (num)=>{

    if(num<=1){
        return num
    }

    else{
        return ( fibSeqNum(num-1) + fibSeqNum(num-2)  )
    }

}

// \2nd - using for loop
let fibSeqNum2 = (num)=>{

    let fibNum=1

        for (let j = 2; j <= num; j++) {
            fibNum = fibSeqNum(j-1) + fibSeqNum(j-2)         
        }

        return fibNum

}

console.log( fibSeqNum(6) )
console.log( fibSeqNum2(7) )


