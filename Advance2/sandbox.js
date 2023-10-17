// Insert Html, Text or Elements

/*
<-- before begin -->
<p>
    <-- after begin -->
    foo
    <-- before end -->
<p>
<-- after end -->
*/

// inserAdjacentElement example
function insertElement() {
    const h1tag = document.querySelector(".container > h1")
    console.log(h1tag.innerText)

    const newEle = document.createElement('h1')
    newEle.appendChild( document.createTextNode('New Element'))
    // h1tag.insertAdjacentElement('beforeBegin', newEle)
    h1tag.insertAdjacentElement('afterBegin', newEle)

}

// insertAdjacentText example

function insertText() {
    const item = document.querySelector('li')

    item.insertAdjacentText('beforeBegin', 'insertAdjacentText')
}
// insertAdjacentHTML example
function insertHTML() {
    const item = document.querySelector('body > div.container > div > div:nth-child(3)')
    item.insertAdjacentHTML('afterEnd','<div class="child">Child4</div>')
}

// insertBefore example

function insertBeforeItem() {
    const ul = document.querySelector('ul')

    const newItem = document.createElement('li')
    newItem.appendChild(document.createTextNode('Yuvraj'))

    const li = document.querySelector('li:nth-child(4)')
    ul.insertBefore(newItem, li) 
}

insertElement()
insertText()
insertHTML()
insertBeforeItem()


// Replacing elements

function replace() {
    const listItem = document.querySelector('li')
    
    const item = document.createElement('li')
    item.textContent = 'HubluHublu'

    listItem.replaceWith(item)
}

replace()

// Remove element

document.querySelector('li').remove()

// Remove child element

const ull = document.querySelector('ul')
const ll = document.querySelector('li:nth-child(2)')
ull.removeChild(ll)


// Adding and removing styles and classes

// you can use element.classList.add(new-class) to add a new class
// you can use element.classList.toggle(new-class) to toggle class 'new-class' on the element 
// you can use element.classList.replacr(old-class, new-class) to replacr old class with  class 'new-class' on the element 




