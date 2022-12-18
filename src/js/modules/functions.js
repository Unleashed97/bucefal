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

export const handleAccordion = () => {
    const accordionBtnList = document.querySelectorAll('.accordion__btn')

    accordionBtnList.forEach((btn) =>
        btn.addEventListener('click', () => {
            const parentAccordionItem = btn.closest('.accordion__item')
            const accordionItemContent = parentAccordionItem.querySelector(
                '.accordion__item-content',
            )
            const accordionItemIcon = btn.querySelector('.accordion__icon')

            parentAccordionItem.classList.toggle('active')

            if (parentAccordionItem.classList.contains('active')) {
                accordionItemIcon.innerHTML = `<svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1L11 1" stroke="#232325"/>
                </svg>                
                `
            } else {
                accordionItemIcon.innerHTML = `<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6L11 6" stroke="#232325"/>
                <path d="M5.5 11.5L5.5 0.5" stroke="#232325"/>
                </svg>
                `
            }
        }),
    )
}
