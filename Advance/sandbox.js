// DOM :  Structure we can use to to interact with web/html page using javascript 

const h1Tag = document.getElementById('h1')

// changing content
console.log(h1Tag)
h1Tag.innerText="Hello World"
h1Tag.textContent="Hello World1"
h1Tag.innerHTML="<h2>Strong</h2>"

// chaning styles
h1Tag.style.color='blue'
h1Tag.style.padding='10px'
h1Tag.style.backgroundColor='Grey'

// querySelector

const divElement = document.querySelector('div.innerDev')
console.log(divElement)

console.log(document.querySelector('#h1'))
console.log(document.querySelector('li'))
console.log(document.querySelector('li:nth-child(2)').innerText)

