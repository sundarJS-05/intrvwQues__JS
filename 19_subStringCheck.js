/* Challenge 19 - tell if a string starts with another given substring or not

Process
----------- */

// s1 - main string ; s2 - substring


// 1st method - using 'startswith'
let starts1 = (s1,s2)=>{
    if (s1.startsWith(s2)) return 'yes - is a starting substring'

    else return 'is not a starting substring '
}

// console.log( starts1('goodgoing', 'goodgo') )

// 2nd method - using includes()

let starts2 = (s1,s2)=>{

    if(s1.includes(s2,0))  return 'yes - is a starting substring'

    else return 'is not a starting substring '

}

console.log( starts1('goodgoing', 'gin') )