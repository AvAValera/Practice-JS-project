function timer(){
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
}
module.exports = timer;