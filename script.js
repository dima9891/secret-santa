function secretSanta(list) {
    if (list.length <= 1) {return}
    const basket = []
    let rand = 0
    const result = []

    for (let i = 0; i < list.length; i++) {basket.push(i)}
    for (const [id, man] of list.entries()) {
        do 
            {   
                if(basket.length > 1) {
                    rand = basket[Math.floor(Math.random()*basket.length)]
                }
                else rand = basket[0]
            }
        while 
            (id === rand)

        basket.splice(basket.findIndex((x) => x === rand),1)

        let line = man + ' дарит подарочек ' + list[rand]
        result.push(line)
    }

    return result
}

function addElement(content) {
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode(content)

    newDiv.appendChild(newContent)

    const currentDiv = document.querySelector('.result')
    currentDiv.appendChild(newDiv)
}

document.querySelector('.submit').addEventListener('click', function() {
    if (document.querySelector('.result').innerHTML !== '') {
        document.querySelector('.result').innerHTML = ''
    }
    if (document.querySelector('#list').value !== '') {
        const textArea = document.querySelector('#list').value
        document.querySelector('#list').value = ''
        const lines = textArea.split('\n')
        if(lines[lines.length-1] === '') {
            lines.pop()
        }
        const result = secretSanta(lines)

        if (result !== undefined) {
            result.forEach(function(line) {
                addElement(line)
            })
        }
    }    
})