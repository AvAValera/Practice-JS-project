window.addEventListener('DOMContentLoaded',()=>{
    const tabMenu = document.querySelector('.tabheader__items'),
        tabMenuItem = tabMenu.querySelectorAll('.tabheader__item'),
        tabContainer = document.querySelectorAll('.tabcontent');

    function hideTab(){
        tabContainer.forEach(el => {
            el.style.display = 'none';
        })
        tabMenuItem.forEach(el => {
            el.classList.remove('tabheader__item_active')
        })
    }
    function showTab(i = 0){
        tabContainer[i].style.display = 'block';
        tabMenuItem[i].classList.add('tabheader__item_active')
    }
    tabMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('tabheader__item')){
            tabMenuItem.forEach((el, i) => {
                if(e.target == el){
                    hideTab();
                    showTab(i);
                }
            })
        }
    })
    hideTab();
    showTab();
    const deadLine = '2021-06-18';
    function getTime(time){
        let resultTime = Date.parse(time) - Date.parse(new Date());
        let days = Math.floor(resultTime /(1000 * 60 * 60 * 24));
        let hours = Math.floor(resultTime / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(resultTime / (1000 * 60) % 60);
        let seconds = Math.floor(resultTime / (1000) % 60);
        
        return res ={
            "result": resultTime,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        }
    };
    
    let day = document.querySelector('#days'),
        hour = document.querySelector('#hours'),
        minute = document.querySelector('#minutes'),
        second = document.querySelector('#seconds');
    setTime();
    function setTime(){
        function addZero(num){
            if(num <= 9){
                return `0${num}`;
            }
            else{
                return num;
            }
        }
        getTime(deadLine);
        day.innerHTML = addZero(res.days);
        hour.innerHTML = addZero(res.hours);
        minute.innerHTML = addZero(res.minutes);
        second.innerHTML = addZero(res.seconds);
    }
    const timer = setInterval(setTime, 1000)
    if(res.result <= 0){
        clearInterval(timer);
        day.innerHTML = '00';
        hour.innerHTML = '00';
        minute.innerHTML = '00';
        second.innerHTML = '00';
    }

    const btnModal = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

    function showModal(){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(showScrollModal);
    }
    function closeModal(){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    btnModal.forEach(el => {
        el.addEventListener('click', showModal);
    })
    modalClose.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')){
            closeModal();
        }
    })
    function scrollModal(){
        if(window.pageYOffset + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight){
            showModal();
            clearInterval(showScrollModal);
        }
    }
    const showScrollModal = setInterval(scrollModal, 200)

    class Card{
        constructor(img, alt, title, text, price, parentSection, ...classesName){
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSection);
            this.classesName = classesName;
        }
        render(){
            const element = document.createElement('div')
            if(this.classesName.length == 0){
                element.classList.add("menu__item");
            }else{
                element.classList.add(this.classesName);
            }
            element.innerHTML = `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}"</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            this.parent.append(element);
        }
    }
    new Card(
        "img/tabs/vegy.jpg",
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        333,
        ".menu .container"
    ).render();
    
    new Card(
        "img/tabs/post.jpg",
        'vegy',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        ".menu .container"
    ).render();
})


