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

let now = Date.parse(new Date());
let deadLine = Date.parse('2021-3-20')
let result = deadLine - now;
console.log(Math.floor(result /(1000 * 60 * 60 * 24)));
console.log(Math.floor(result / (1000 * 60 * 60) % 24));
console.log(Math.floor(result / (1000 * 60) % 60));
console.log(Math.floor(result / (1000) % 60));