//func declaration

function square(x,y){
    return x * y
}

// console.log(square(2,4))


//func expression

const plus = function(x,y){
    return x+y
}

// console.log(plus(5,8))

//arrow func

const minus = (a,b) =>{
    return a-b
}
// console.log(minus(10,4))

// const add = x => x+x;
const add = (x,b) => x+b;

console.log(add(7,2))

