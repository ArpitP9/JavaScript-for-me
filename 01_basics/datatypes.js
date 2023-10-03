//Primtive

// 7 types : string , Number , Boolean , null , undefined, undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 12345678909876543n

//Reference type(Non primtive)

//Array, Objects, functions


//Array
const heros = ["shaktiman", "naaagraj","doga" ]

//Object
let MyObj ={
    name : "arpit",
    age: 20

}


const myFunction = function(){
    console.log("Hello World");
}

// to know datattype we use a function of: typeof

console.log(typeof bigNumber)