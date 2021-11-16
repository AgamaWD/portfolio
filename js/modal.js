const modal = document.getElementById('js-modal')

function openModal() {
    modal.classList.remove('hidden')
    document.body.style.overflow = "hidden"
};

function closeModal() {
    document.body.style.overflow = "visible"
    modal.classList.add('hidden')
};
