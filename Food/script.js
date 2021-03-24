window.addEventListener('DOMContentLoaded',()=>{
    //Tabs

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

    //Timer

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

    //Modal

    const btnModal = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

    function showModal(){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // clearInterval(showScrollModal);
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
            // clearInterval(showScrollModal);
        }
    }
    // const showScrollModal = setInterval(scrollModal, 200)

    //Messages modal window

    const messageModal = {
        download : 'Загрузка',
        ok : 'Мы с Вами скоро свяжемся',
        error : 'Возникли трудностина сайте'
    }
    
    const modalContent = document.querySelector('.modal__content')
    const modalDialog = document.querySelector('.modal__dialog')
    
    function showMessageModal(mess){
        modalContent.style.visibility = 'hidden'
        const message = document.createElement('div')
        message.style.textAlign = 'center'
        message.innerHTML = mess
        message.classList.add('modal__content')
        modalDialog.append(message)
        // setTimeout(() => {
        //     message.remove()
        //     modalContent.style.visibility = 'visible'
        //     closeModal()
        // }, 3000)
    }

    //Post modal form message

    const form = document.querySelectorAll('form')
    
    form.forEach((form) => {
        postData(form)
    })
    function postData(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(form)
            const obj = {}
            formData.forEach((value, key) =>{
                obj[key] = value
            })
            const json = JSON.stringify(obj)
            fetch('http://localhost:3000/requests',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : json
            }).then(data =>{
                console.log(data);
                showMessageModal(messageModal.ok)
            }).catch(() =>{
                showMessageModal(messageModal.error)
            })
            
            
        })
    }

    //Card

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
    async function createCard(){
        const res = await fetch('http://localhost:3000/menu').then(data => data.json())
        .then (data => data.forEach(({img, altimg, title, descr, price}) => {
        new Card(img, altimg, title, descr, price, ".menu .container").render();
    }))
        return res
    }
    createCard();
        

    //Slider

    const slide = document.querySelectorAll('.offer__slide'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        nextBtn = document.querySelector('.offer__slider-next'),
        numSlide = document.querySelector('#current'),
        totalSlide = document.querySelector('#total');
    let count = 1;
    function hiddenSlide(){
        slide.forEach(el => el.style.display = 'none')
    }
    function showSlide(item){
        hiddenSlide();
        slide[item].style.display = 'block';
        numSlide.textContent = "0" + count;
        totalSlide.textContent = "0" + slide.length;
    }
    function clickSlide(){
        prevBtn.addEventListener('click',() =>{
            count--
            if(count == 0){
                count = slide.length
            }
            showSlide(count -1)
        })
        nextBtn.addEventListener('click', () =>{
            count++
            if(count > slide.length){
                count = 1
            }
            showSlide(count - 1)
            console.log(count);
        })
    }
    hiddenSlide()
    clickSlide()
    showSlide(0)

    //Calc

    const result =document.querySelector('.calculating__result span')
    let sex, height, weight, age, ratio

    function calcTotal(){
        if(!sex || !height || !weight || !age || !ratio){
            result.textContent = '____'
            return
        }
        if(sex === 'famele'){
            result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio
        }else{
            result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio
        }
    }
    calcTotal()
})


