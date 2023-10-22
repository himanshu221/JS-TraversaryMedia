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

const inputElement = document.querySelector('#item-form')

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


