const modal = document.querySelector('.hide-modal')
const contact_modal = document.querySelector('.contact-modal')
const btn_click_contact = document.querySelector('.btn-contact')

function show_modal() {

    // modal.classList.contains("show-modal")
    contact_modal.style.display = 'flex'
    setTimeout(() => {
        modal.classList.contains("show-modal") && setTimeout(() => {
            contact_modal.style.display = 'none'
        }, 300)
        modal.classList.toggle('show-modal')
    }, 50)
}

function contacter(){


    show_modal()
}
