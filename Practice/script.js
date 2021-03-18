const wrapper = document.querySelector('.wrapper');
const cube = document.querySelectorAll('.cube');


wrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('cube')){
        console.dir(e.target);
        
        e.target.classList.add('hidden');
        setTimeout(() =>{
            e.target.classList.remove('hidden');
        },2000)
    }
})
