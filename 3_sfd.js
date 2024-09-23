/* Challenge - count total occurences of some 'x' in a string

Process
----------- */

let countCharacter = ( word, char)=>{

    // to treat uppercase same as lowercase
    let wordLC = word.toLowerCase()
    let charLC = char.toLowerCase()
    // console.log(wordLC, '\n', charLC)


    // convert string to arrayt for using REduce
    let wordArr = wordLC.split("")
    // console.log(typeof wordArr)

    occurences = wordArr.reduce( (acml, currentChar)=> {

        if(currentChar==char){
            acml = acml+1

        }

        return acml

        }, 0)
    
    console.log("total occurences are...")

    return (occurences)

}

console.log( countCharacter('adJ6jad7jasJ34sja34J', 'j') )