function slider(){
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
}
module.exports = slider;