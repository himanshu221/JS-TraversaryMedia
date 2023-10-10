// Js is an interpreted programming language ie the whole code is not complied and then run
// rather it is run on the fly line by line, like a scripting language, hence java 'script'

// Js is a dynamically typed language that means it doesn't define variable types

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

