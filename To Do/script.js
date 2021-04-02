const listBlock = document.querySelector('.container__list')
const list = [
    {name : 'Buy milk', ready : false},
    {name : 'Go to work', ready : true},
    {name : 'Walking with dog', ready : false},
    {name : 'Go to sleep', ready : true},
    {name : 'Kiss daughter', ready : false},
]
function sort (){
    list.sort((a, b) => a.ready - b.ready)
    
}

function addItenList(array) {
    listBlock.innerHTML = ' '
    sort();
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
}

addItenList(list)

function addList(){
    const input = document.querySelector('.text-input')
    const btn = document.querySelector('.btn-input')
    const message = document.querySelector('.message')
    btn.addEventListener('click', () => {
        if(input.value){
            message.textContent = ''
            list.push({name : input.value, ready : false})
            input.value = '';
            addItenList(list)
            checkElement()
        }
        else{
            message.textContent = 'Must be not empty'
            
        }
    })
}
addList()

function checkElement(){
    const check = document.querySelectorAll('input.check-item')
    check.forEach((el, i) =>{
        el.addEventListener('click', (e) =>{
            if(e.target.checked){
                el.parentElement.classList.add('checked')
                list[i].ready = true
            }
            else{
                el.parentElement.classList.remove('checked')
                list[i].ready = false
            }
        })
    })
}
checkElement()
