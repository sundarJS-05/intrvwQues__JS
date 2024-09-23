/* Challenge 4 - function telling triangle type - euqil / isos / scln

Process
----------- */


let triangleType = (a,b,c)=>{
    if (a==b && b==c){
        return 'equilateral'
    }

    else if ( (a==b && b!=c) || (a==c && c!=b) || (b==c && c!=a) ) {
        return 'isosceles'
    }

    else {
        return 'scalene'
    }

}


console.log( triangleType(25,267,124))
console.log( triangleType(1256,1256,1256))
console.log( triangleType(2345,356,2345))
