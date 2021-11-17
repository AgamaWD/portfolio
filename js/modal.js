const modal = document.getElementById('js-modal')

function openModal() {
    modal.classList.remove('hidden')
    document.body.style.overflow = "hidden"
    setTimeout(() => {document.addEventListener('click', outsideClick)}, 0)
};

function closeModal() {
    document.body.style.overflow = "visible"
    modal.classList.add('hidden')
    document.removeEventListener('click', outsideClick)
};

function outsideClick(event) {
    const modalClass = '.modal-body';
    const targetEl = event.target;
    const targetParent = targetEl.closest(modalClass);

    if(!targetEl.classList.contains(modalClass) && targetParent === null) {
        modal.classList.add('hidden')
        document.removeEventListener('click', outsideClick)
    }
}