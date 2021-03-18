document.addEventListener('DOMContentLoaded',()=>{
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
    const deadLine = '2021-03-19';
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
        let day = document.querySelector('#days'),
            hour = document.querySelector('#hours'),
            minute = document.querySelector('#minutes'),
            second = document.querySelector('#seconds');
        day.innerHTML = addZero(res.days);
        hour.innerHTML = addZero(res.hours);
        minute.innerHTML = addZero(res.minutes);
        second.innerHTML = addZero(res.seconds);
        if(res.resultTime <= 0){
            clearInterval(timer);
        }
    }
    const timer = setInterval(setTime, 1000)
})


