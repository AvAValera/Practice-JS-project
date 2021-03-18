'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movieList = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('.add button'),
    input = document.querySelector('.adding__input'),
    checkbox = document.querySelector('[type = "checkbox"]');

function removeBlock(){
    document.querySelectorAll('.promo__adv img').forEach((el) => {
        el.remove();
        });
}
function changeGenre(){
    document.querySelector('.promo__genre').textContent = "Драмма"
}
function changeBackground(){
    document.querySelector('.promo__bg').style.
    backgroundImage = "url('img/bg.jpg')"
}
function movies(){
    movieList.innerHTML = ' ';
    movieDB.movies.forEach((el, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${el}
        <div class="delete"></div>
        </li>`;
        
    })
    document.querySelectorAll('.delete').forEach((el, i) => {
        el.addEventListener('click', (e) =>{
            e.target.parentElement.remove();
            movieDB.movies.splice(i, 1);
            movieDB.movies.sort();
            movies();
        })
    })
}
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(input.value){
        movieDB.movies.push(input.value);
        movieDB.movies.sort();
        movies();
    if(checkbox.checked){
        console.log(`Фильм ${input.value} добавлен в избранное`);
        } 
        input.value = '';
    }
})

removeBlock();
changeGenre();
changeBackground();

movies();
