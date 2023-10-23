window.addEventListener('keypress',e => {
    const keyCodes = {
        'Key': e.key === ' ' ? 'Space' : e.key,
        'Code' : e.code,
        'KeyCode': e.keyCode
    }
    const insert = document.getElementById('insert')
    insert.innerHTML = ''
    for( const key in keyCodes){
        const div = document.createElement('div')
        div.className = 'key'
        const textNode = document.createTextNode(keyCodes[key])
        const small = document.createElement('small')
        small.appendChild(document.createTextNode(key))

        div.appendChild(textNode)
        div.appendChild(small)

        insert.appendChild(div)
    }
})