/* Challenge 28 - truncate a string exceeding certain lenght

Process
----------- */

let truncateString = (str, maxNum)=>{

    if(str.length > maxNum){
        return ` truncated string is -> ${str.slice(0, maxNum)}`
    }

    else{
        return `can't truncate since maxNum: ${maxNum} > string length: ${str.length}`
    }

}

console.log( truncateString('adsagdad', 24) )