let openModalBtn = document.querySelector('.openModalBtn');
let closeModalBtn = document.querySelector('.closeModalBtn');
let modalContainer = document.querySelector('.modalContainer')

openModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
})
closeModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})
modalContainer.addEventListener('click',(event)=>{
    if(event.target.className === 'modalContainer'){
        modalContainer.style.display = 'none'
    }
})

