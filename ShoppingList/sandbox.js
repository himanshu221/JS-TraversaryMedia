/////// EVENTS : an event is anything that happens on the web page
// clicking on element, hovering on element, closing a window, submitting a form,etc

// JS event listner

const clearButton = document.querySelector('.btn-clear')

// clearButton.onclick = function () {
//     alert('Alert button was clicked')
// }

// Instead of above method of we should use below method
// we can create multiple onclick events on below method but not on above method

// clearButton.addEventListener('click', () => alert('button was clicked'))
// clearButton.addEventListener('click',() => console.log('button was clicked'))

// removeEventListener can be used to remove the event listener

// you can manually trigger the event as well, here we are trigeering it with a wait time of 5000ms
// setTimeout(() => clearButton.click(),5000)

// One way to do it
// clearButton.addEventListener('click', () => {
//     const list = document.querySelectorAll('li')
//     list.forEach(item => item.remove())
// })

// Another way to do it
clearButton.addEventListener('click', () => {
    const list = document.querySelector('ul')

    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
})

// Other Mouse events apart from 'click'
// dblclick -> double click event
// contextmenu -> right click event
// mousedown -> when you long press the mouse
// mouseup -> when you release the long press on mouse
// wheel -> when you scroll the mouse
// mouseover -> when you hover over the element
// mouseout -> when you over and move out of the object, opposite to mouseover
// dragstart -> when you click and start to drag the element
// drag -> event constantly fires of as you drag an element
// dragend -> when you end the drag

const logo = document.querySelector('img')

logo.addEventListener('mousedown', () => document.body.style.backgroundColor = 'green')
logo.addEventListener('mouseup', () => document.body.style.backgroundColor = 'White')
logo.addEventListener('mouseover', () => document.body.style.backgroundColor = 'pink')
logo.addEventListener('mouseout', () => document.body.style.backgroundColor = 'white')
logo.addEventListener('dragstart', () => document.body.style.backgroundColor = 'tomato')
logo.addEventListener('dragend', () => document.body.style.backgroundColor = 'white')

