const wrapper = document.querySelector('.wrapper');
const cube = document.querySelectorAll('.cube');

cube.forEach((el, i) => {
    console.log(i);
    
    el.addEventListener('click', (e) => {
        e.target.classList.add('hidden');
        setTimeout(() =>{
            e.target.classList.remove('hidden');
        },2000)
    })
})
const circle = document.createElement('div');
circle.classList.add('circle')

cube[1].prepend(circle);
cube[2].insertAdjacentHTML("beforebegin", '<h1>Hello</h1>');