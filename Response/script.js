// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
//     const res = new XMLHttpRequest();
//     res.open('GET', 'base.json');
//     res.setRequestHeader('Content-Type','application/json; charset=utf-8');
//     res.onload = () => {
//         if(res.status == 200) {
//             const data = JSON.parse(res.responseText);
//             console.log(data);
            
//         }
//     }
//     res.onerror = () => {
//         console.log('error');
        
//     }
//     res.send();
    
// })

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    fetch('base.json', {
        method: 'GET',
    })
    .then(res => res.json())
    .then(json => {
        btn.textContent = json.age
    })
    
    
})