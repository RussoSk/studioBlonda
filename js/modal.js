(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.body,
  };

  for (let button of refs.openModalBtn) {
    button.addEventListener("click", toggleModal);
  }

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
