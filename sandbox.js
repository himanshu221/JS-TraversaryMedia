// Js is an interpreted programming language ie the whole code is not complied and then run
// rather it is run on the fly line by line, like a scripting language, hence java 'script'

// Js is a dynamically typed language that means it doesn't define variable types

// Date Object

let d = new Date()
console.log('Here is date ',d)

console.log('2022-10-05T03:42:22')
console.log('2022/10/05')
console.log(Date.now()) // -> gives current timestamp

// get timestamp in milli seconds
console.log(d.getTime())

// date to timestamp
console.log(new Date(1696774891350))

// Intl api can be used to format dates acc to local timezone
console.log(Intl.DateTimeFormat('default').format(d))
console.log(Intl.DateTimeFormat('en-US').format(d))

console.log(d.toLocaleDateString('default')) // same as above
