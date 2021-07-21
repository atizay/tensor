document.addEventListener('DOMContentLoaded', function() {

  const addContact = document.querySelector('.add-contacts'),
        overlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.close-modal'),
        modalPopup = document.querySelector('.modal-popup');

  addContact.addEventListener('click', () => {
    overlay.classList.toggle('show');
    modalPopup.classList.toggle('show');
  })

  overlay.addEventListener('click', () => {
    overlay.classList.toggle('show');
    modalPopup.classList.toggle('show');
  })

  closeModal.addEventListener('click', () => {
    overlay.classList.toggle('show');
    modalPopup.classList.toggle('show');
  })

});