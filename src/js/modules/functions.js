export const handleModal = () => {
    const modal = document.querySelector('.modal')
    const modalOpenBtn = document.querySelector('.modal-open')
    const modalClose = document.querySelector('.modal-close')

    modalOpenBtn.addEventListener('click', () => {
        modal.classList.add('active')
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active')
    })

    window.addEventListener('click', ({ target }) => {
        if (target === modal) {
            modal.classList.remove('active')
        }
    })
}

export const handleForm = () => {
    const formList = document.querySelectorAll('.form')

    formList.forEach((form) =>
        form.addEventListener('submit', (e) => {
            e.preventDefault()
        }),
    )
}
