// Js is an interpreted programming language ie the whole code is not complied and then run
// rather it is run on the fly line by line, like a scripting language, hence java 'script'

// Js is a dynamically typed language that means it doesn't define variable types
// JS at it cores is single threaded and is executed line by line although it provides for asynchronous execution capabilities 

// Date Object

let d = new Date()
console.log('Here is date ',d)

console.log(new Date('2022-10-05T03:42:22'))
console.log(new Date('2022/10/05'))
console.log(Date.now()) // -> gives current timestamp

// get timestamp in milli seconds
console.log(d.getTime())

// same as above
console.log(d.valueOf())

// timestamp to date
console.log(new Date(1696774891350))
d = new Date('2022-10-05T03:42:22')

// get full year for date, month (0  based), get date, get day of thr month and so on
console.log(d.getFullYear(),d.getMonth(),d.getDate())

// Intl api can be used to format dates acc to local timezone
console.log(Intl.DateTimeFormat('default').format(d))
console.log(Intl.DateTimeFormat('en-US').format(d))

console.log(d.toLocaleDateString('default')) // same as above


//////// Arrays

// Array constructor
const fruits = new Array('apples','banana','orange')

// Array literals
const berries = ['strawberry','blueberry']

const x = [fruits,berries] // gives array of array

console.log(x)

// fruits.push(berries)
// console.log(fruits) //adds array to as a single element to this fruits array

// Array spread operator (...) -> add elements to the array not the whole array as an element
console.log([...fruits,...berries])

// Flatten
const arr = [1,2,[3,4],5,[6,7,8]] 
console.log(arr.flat())

// Json

const jsObject = {
    id: 1,
    name: "Abc"
}

// convert to Json string
const str = JSON.stringify(jsObject)
console.log(str)

// parse json string 
const parseObj = JSON.parse(str)
console.log(parseObj)

// var variables are not blocked scoped rather they are global scoped, though it is finctional scoped 


// Execution context
/*
    This is the basic environment set to execution the code and aids whatever is needed for its execution.
    At the root level we have a global execution scope while when we execute a function or a block it creates
    a block or function execution scope for itself.

    It has 2 phases : 

    1. Memory Creation phase
        Global object are created
        'this' object is created and binded to global object
        Setup heap memory to store variables and function reference and set them to 'undefined'
    
    2. Execution phase: 
        Execute code line by line
        Create new execuiton context for each function   

*/

// Call Stack is used for multiple execution context


// Truthy and Falsy

// A string in anything in it is a truthy value ie Boolean("himanshu") will give true 

// Falsy values: 
// - empty string ('' or "")
// - 0
// - NaN
// - undefined
// - null
// - false 

// && ->  returns the first falsy value or last value

console.log(20 && 0)  // -> returns 0
console.log(0 && 23)  // -> returns 0
console.log(30 && 20 && 19) // -> returns 19 
console.log(76 && '' && 0 && 21) // returns ''

// || -> returns the first truthy value or last value 

console.log(10 || 20) // -> 10
console.log(0 || '' || 'NaN' || undefined) // -> 'NaN' 

// ?? -> returns right side operator when left side is null or undefined

console.log(10 ?? 20) // -> 10
console.log(null ?? 20) // -> 20
 
// for of loop

const names = ['Himanshu', 'Snigdha', 'Chikki']
const obj = 
    {
        name: "Himanshu",
        age: "25"
    }
for(const name of names){
    console.log(name)
}

// for in loop

for(const i in names){
    console.log(i, names[i])
}

for(const key in obj){
    console.log(key, obj[key])
}

// Arrays methods

const tempArr = [1,2,3,4,5]

tempArr.forEach(ele => console.log(ele))
console.log(tempArr.filter(ele => ele%2 == 0))
console.log(tempArr.map(ele => ele*2)) 
console.log(tempArr.reduce((accumulator, currVal) => accumulator + currVal,0))