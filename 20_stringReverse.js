/* Challenge 20 - reverse a string without using reverse() fn.

Process
----------- */

let strRvrs = (str)=>{

    let revStr = ''
    let j = (str.length) - 1

    for ( j; j>=0 ; j--) {

        revStr = revStr + str[j]
  
    }

    console.log('reversed string is..')
    return revStr

}

console.log(  strRvrs('1234ser'))