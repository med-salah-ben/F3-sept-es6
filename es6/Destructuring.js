//1 assigning arr items to variables

// const [a,b,c] = [123,"hi",true]
// console.log("a :" , a , "b :" ,b , "c:" ,c)


//skipping items 

// const [ ,,z] = [111,66,"dfdzfez"]

// console.log(z)

//assigning arr items to variables , storing the rest
const [a,b,...rest] = [365,"year",true,77,false,"hi"]
console.log(rest)

//swapping var = change it
let x=true;
let y =false;
[x,y]=[y,x]
console.log(y)