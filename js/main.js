document.addEventListener('DOMContentLoaded', function() {

  const dialogBar = document.querySelector('.dialog-bar'),
        dialogsBtn = document.querySelector('.menu-list__link_dialogs'),

        addContact = document.querySelector('.menu-list__link_add'),
        overlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.close-modal'),
        modalPopup = document.querySelector('.modal-popup');

  dialogsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialogBar.classList.toggle('show');
  });

  // dialogsBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   if (dialogBar.classList.contains('show')) {
  //     dialogBar.classList.remove('show')
  //     dialogBar.classList.add('hide')
  //   } else {
  //     dialogBar.classList.remove('hide')
  //     dialogBar.classList.add('show')
  //   }
  // })

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



/*

  // const addContact = document.querySelector('.add-contacts'),
  //       overlay = document.querySelector('.overlay'),
  //       closeModal = document.querySelector('.close-modal'),
  //       modalPopup = document.querySelector('.modal-popup');

  // addContact.addEventListener('click', () => {
  //   overlay.classList.toggle('show');
  //   modalPopup.classList.toggle('show');
  // })

  // overlay.addEventListener('click', () => {
  //   overlay.classList.toggle('show');
  //   modalPopup.classList.toggle('show');
  // })

  // closeModal.addEventListener('click', () => {
  //   overlay.classList.toggle('show');
  //   modalPopup.classList.toggle('show');
  // })


  */