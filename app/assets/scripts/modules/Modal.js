class Modal {
  constructor () {
    this.openModal = document.querySelectorAll(".open-modal")
    this.modal = document.querySelector(".modal")
    this.modalContent = document.querySelector(".modal__content")
    this.closeModal = document.querySelector(".modal__close")
    this.clickedItem = document.querySelector('.clicked')
    this.events()
  }

  events() {
    this.openModal.forEach(el => el.addEventListener("click", () => {
      this.openTheModal(el)
    }))
    this.closeModal.addEventListener("click", () => {
      this.closeTheModal()
    })
    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal(el) {
    this.modal.classList.add("modal--is-visible") 
    el.classList.add("clicked")
    let imageSrc = el.getAttribute("data-srcset")
    this.modalContent.setAttribute("srcset", imageSrc)
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
    this.openModal.forEach(el => el.classList.remove("clicked"))
  }
}

export default Modal
