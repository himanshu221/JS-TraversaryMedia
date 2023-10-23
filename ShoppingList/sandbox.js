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
logo.addEventListener('drag', () => document.body.style.backgroundColor = 'grey')
logo.addEventListener('dragend', () => document.body.style.backgroundColor = 'white')

// Event Object
// When we add an event listner to an element, the event function gets an event object in parameter
// which have the following properties in it

 /*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

logo.addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.type)
    // e.preventDefault() -> it stops the default behaviour like if we have a click event on a link, it will stop you from going to the link when clicked on it
})


// Keyboard events

// keypress -> event occur once when u press any key
// keydown -> event continously triggers as you keep pressing the key down
// keyup -> event occurs when you release the key

const inputElement = document.querySelector('#item-input')

inputElement.addEventListener('keypress', e => {
    console.log(e.key) // gives you the key you presed
    console.log(e.keyCode) // gives unique code of the key = https://www.toptal.com/developers/keycode/table-of-all-keycodes

    if (e.code == 'Digit1')
        console.log('You pressed 1')

    if(e.repeat) // checks if the event is reoeating
        console.log('You are pressing down the key')

        // e.shiftKey -> returns true if shift key is pressed
        // e.altKey -> returns true if alt key is pressed
        // e.ctrlKey -> returns true if ctrl key is pressed
    })


// Input event
// it can be used with any input event like form input, list input, checkbox input


    inputElement.addEventListener('input', e => {
        const heading = document.querySelector('h1')

        heading.textContent = e.target.value // target gives the input element, but value gives the actual value typed in
    })

// in case of checkbox input event, e.target.checked gives true is the check box is checked

// Focus and blur event : same as input but used to emphasis on an element and de-emphasis on blurr

inputElement.addEventListener('focus', () => {
    console.log("input is focused")
    inputElement.style.outlineStyle = 'solid'
    inputElement.style.outlineWidth = '2px'
    inputElement.style.outlineColor = 'green'

})

inputElement.addEventListener('blur', () => {
    console.log("input is focused")
    inputElement.style.outlineColor = 'white'

})


// Form Submission

const form = document.querySelector("#item-form")

form.addEventListener('submit', e => {
    e.preventDefault()
    const value = document.querySelector("#item-input").value

    if(value.trim() === '')
    alert("Please provide an input value")

    console.log(value)

    // another way of getting form input values is through form data object
    const formData = new FormData(form)

    // provide the input name
    console.log(formData.get('item'))

})

// Event Bubbling
// When we have the same listener event on a html element and the same event on any of its ancestor, when we trigger the event of the child, all its ancestor events will also be triggered
// to prevent this we can use an event fucntion : e.stopPropagation() in the child event function


// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//   alert('Button was clicked');
//   e.stopPropagation();
// });

// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//   alert('Form was clicked');
// });

// document.body.addEventListener('click', () => {
//   alert('Body was clicked');
// });

// Event Delegation
// we can place event listener on ul instead of each list item

const list = document.querySelector('ul')

list.addEventListener('click', e => {
    console.log(e.target)
})