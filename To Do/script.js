const listBlock = document.querySelector('.container__list')
const list = [
    {name : 'By milk', ready : false},
    {name : 'Go to work', ready : true},
    {name : 'Walking with dog', ready : false},
    {name : 'Go to sleep', ready : true},
    {name : 'Kiss douther', ready : false},
]
function sort (){
    const item = document.querySelectorAll('li')
    item.forEach(el => {
        if(el.classList.contains('checked')){
            listBlock.after(el)
        }
    })
}

function addItenList(array) {
    array.map((el) => {
        const checkbox = document.createElement('input')
        const li = document.createElement('li')
        checkbox.setAttribute('type', 'checkbox')
        li.classList.add('item')
        checkbox.classList.add('check-item')
        li.textContent = el.name
        checkbox.checked = el.ready
        if(el.ready) li.classList.add('checked')
        li.prepend(checkbox)
        listBlock.append(li)
    })
    sort()
}

addItenList(list)

function addList(){
    const input = document.querySelector('.text-input')
    const btn = document.querySelector('.btn-input')
    btn.addEventListener('click', () => {
        if(input.value){
            const checkbox = document.createElement('input')
            const li = document.createElement('li')
            checkbox.setAttribute('type', 'checkbox')
            li.classList.add('item')
            checkbox.classList.add('check-item')
            li.textContent = input.value
            li.prepend(checkbox)
            listBlock.append(li)
            input.value = '';
        }
        else{
            
            
        }
    })
}
addList()

