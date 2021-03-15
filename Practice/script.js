const cube = document.querySelectorAll('.cube');

cube.forEach((el, i) => {
    el.addEventListener('click', () => {
        cube[i].classList.add('hidden')
    })
})