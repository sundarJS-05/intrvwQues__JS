/* Challenge 18 - tell whether an ASCII character is lower or upper case

Process
----------- */

let lwrOrUpr = (char)=>{
    if(char === char.toLowerCase())  return 'char is lowercase'

    else return 'char is uppercase'
}

console.log( lwrOrUpr('J') )
console.log( lwrOrUpr('l') )