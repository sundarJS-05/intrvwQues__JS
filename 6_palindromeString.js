/* Challenge 6 - tell if string is palindromic or not

Process
----------- */

let arr = [1,4,5,6,1]


let palindrome = (str)=>{

    // let halfLength = (str.length/2)

    // let firstHalf = str.slice(0,(halfLength+1) )
    // console.log(typeof firstHalf)
    // let secondHalf = str.slice(halfLength, (str.length))
    // console.log(typeof secondHalf)

    // if ( firstHalf.includes(secondHalf) ) return 'palindrome'

    // else  return ('not a palindrome')

    console.log('string is',str)

    let strArr = str.split("")

    let reversedArr = strArr.reverse()
    // console.log(reversedArr)

    let finalStr = reversedArr.join("")
    console.log('final string is', finalStr)


    if (str == finalStr)  {
        return '-- Thereby, a palindrome'
    }
    else {
        return '-- Thus,not a palindrome'
    }

}


console.log( "1st", palindrome('asdftgjgk'))

console.log( "2nd", palindrome('asdftfdsa'))