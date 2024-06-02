//Programming for Absolute Beginners by Hamzah Syed

//Callback Functions
//A callback function is a function that is passed as an argument to another function. 
//Here's an Example

//creating an Arrow Function
let doSmthig = (Callback : any) => {
    console.log("Hello")
    Callback()
}
//creating a Callback function to use as a parameter in the doSmthing function
let doSmthig2 = () => {
    console.log("CallBack Called")
}

//Calling the function
doSmthig(doSmthig2)

console.log("-".repeat(50))

//doing the same thing but creating a normal function instead of arrow function
function doSomething(Callback : any){
    console.log("Hello")
    Callback()
}

function doSomething2(){
    console.log("Callback Called")
}
//calling the function
doSomething(doSomething2)
console.log("-".repeat(50))

//practicing a few more callback functions

// Simple Greeting Function
// Create a function that accepts a name and a callback function. The callback function should greet the person.
let greet = (name : string,callback : () => void) =>{
    console.log(`Hello ${name}`)
    callback()
}

let callbackF = () => {
    console.log("How are you")
}

//calling the function 
greet("Haya",callbackF)
console.log("-".repeat(50))


// Addition Function
// Create a function that takes two numbers and a callback. The callback function should add the two numbers and return the result.

function addition(num1: number,num2: number, callback:(result : number)=> void){
    let result = num1 + num2
    callbackF2(result)
}

function callbackF2(result: number){
    console.log(`The result is ${result}` )
}

addition(12,34,callbackF2)
console.log("-".repeat(50))


//Array Element Doubling

// Write a function that takes an array of numbers and a callback. The callback function should double each number in the array.

let arrDoubling = (numbers : number[], callback : (numbers: number[],result : number[])=>void)=>{
    let result = numbers.map((num) => num *2)
    callback(numbers,result)
}

function callbackF3 (numbers: number[],result : number[]){
    console.log(`Array Inputed : ${numbers}`)
    console.log(`Doubled Array : ${result}`)
}

arrDoubling([1,4,3,2,5],callbackF3)
console.log("-".repeat(50))


//String Transformation

//Create a function that takes a string and a callback. The callback function should transform the string to uppercase.

let stringTransform = (str : string, callback : (result : string)=>void) =>{
    let result = str.toUpperCase()
    callback(result)
}

function callbackF4(result : string){
    console.log(`The result is : "${result}"`)
}
stringTransform("Hello how are you?",callbackF4)
console.log("-".repeat(50))




