const list = [
    'By milk',
    'Go work',
    'Walking with dog',
    'Go to sleep'
]

function addItenList(array) {
    const listBlock = document.querySelector('.container__list')
    array.map((el) => {
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const li = document.createElement('li')
        li.classList.add('item')
        li.textContent = el
        li.append(checkbox)
        listBlock.append(li)
    })
}
addItenList(list)