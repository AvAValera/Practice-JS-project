function modal(){
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
}
module.exports = modal;