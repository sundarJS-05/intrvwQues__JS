/* Challenge 31 - password validator
at least - 1 upper;1 lowercase; 1 digit; 8 chaars total

Process
----------- */

// let s='23455'
// let sn = Number(s)
// console.log(sn)

let pswdVldtr = (psw)=>{

    let hasLwrCase = false
    let hasUprCase = false
    let hasNum = false

    for (let j of psw) {

        if(j.charCodeAt(0) >=65 && j.charCodeAt(0) <=90 ){
           hasUprCase = true

        } else if( j.charCodeAt(0) >=97 && j.charCodeAt(0) <=122 ){
           hasLwrCase=true

        } else if( !isNaN( Number(j) ) ){
             hasNum=true

        }
        
    }

    if( (!hasLwrCase) || (!hasUprCase) || (!hasNum) || psw.length<8 ){
        return `password invalid`
    }

        return `password is VALID`

}

console.log( pswdVldtr("13aBsJS5"))