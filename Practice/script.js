const btn = document.querySelector('button')
let input = document.querySelector('#inp')







btn.addEventListener('click', () => {
    const obj = {
        name: `${input.value}`
    }
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {  
            "Content-type": "application/json; charset=UTF-8"  
        },  
        body: JSON.stringify(obj)
    })
    
    
})

