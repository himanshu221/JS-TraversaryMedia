// DOM :  Structure we can use to to interact with web/html page using javascript 

const h1Tag = document.getElementById('h1')
console.log(document.querySelector("body > div.container > h1"))

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

// querySelectorAll

const listElements = document.querySelectorAll('li')

listElements.forEach(li => console.log(li))

//////// Traversing DOM

// Geting children element

const parent = document.querySelector('.parent')
const childs = parent.children
console.log(childs)
console.log(childs[0].innerText)

// we can get first child 
console.log(parent.firstElementChild.innerText)

// we can get last element child
console.log(parent.lastElementChild.innerText)

// we can access siblings 
console.log(parent.firstElementChild.nextElementSibling.innerText)
console.log(parent.lastElementChild.previousElementSibling.innerText)

// access parent from child

const child = document.querySelector('.child')
console.log(child.parentElement.className )


// There are dfferent types of DOM nodes like element, attributes, comment, Text ext,
// The above methods works on element nodes
// the below methods work on any type of nodes


// Geting child nodes

const parent2 = document.querySelector('.parent')
const childs2 = parent.childNodes
console.log(childs2)
console.log(childs2[1].textContent)

// we can get first child 
console.log(parent2.firstChild)

// we can get last element child
console.log(parent2.lastChild)

// we can access siblings 
console.log(parent2.firstChild.nextSibling.innerText)
console.log(parent2.lastChild.previousSibling.innerText)

// access parent from child

const child2 = document.querySelector('.child')
console.log(child2.parentNode.className )

// For most part I will be working with element nodes

// Creating html element

const div = document.createElement('div')

div.id = 'new-element'
div.className = 'new-element'

div.setAttribute('title','dhinchakDiv')

// innerText should be used for changing an already existing text
// div.innerText = 'Hello World !'

const text = document.createTextNode('Hello World!')
div.appendChild(text)
console.log(div)

// then you can append the element created anywhere in body

// document.body.appendChild(div)
document.querySelector('ul').appendChild(div) 

