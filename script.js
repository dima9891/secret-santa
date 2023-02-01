function secretSanta(list) {
    if (list.length <= 1) {return}
    const basket = []
    const result = []
    let rand = 0

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

function addElement(content, destination) {
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode(content)

    newDiv.appendChild(newContent)

    destination.appendChild(newDiv)
}

document.querySelector('.submit').addEventListener('click', function() {
    const destination = document.querySelector('.result')
    const listElement = document.querySelector('#list')
    
    if (destination.innerHTML !== '') {
        destination.innerHTML = ''
    }
    if (listElement.value == '') {return}

    const lines = listElement.value.split('\n')
    listElement.value = ''

    if(lines[lines.length-1] === '') {lines.pop()}
    
    const result = secretSanta(lines)
    
    if(result == undefined) {return}

    result.forEach(function(line) {
        addElement(line, destination)
    })  
})