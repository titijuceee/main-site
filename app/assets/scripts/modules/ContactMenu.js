class ContactMenu {
  constructor() {
    this.contactMenu = document.querySelector(".contact-menu")
    this.navbar = document.querySelector(".navbar")
    this.contactText = document.querySelectorAll(".contact-menu__text")
    this.events()
  }

  events() {
    this.contactMenu.addEventListener("mouseenter", () => this.showTheText())
    this.contactMenu.addEventListener("mouseleave", () => this.hideTheText())
  }

  showTheText() {
    this.navbar.classList.add("navbar--is-expanded")
    this.contactText.forEach(el => el.classList.add("contact-menu__text--is-visible"))
  }

  hideTheText() {
    this.navbar.classList.remove("navbar--is-expanded")
    this.contactText.forEach(el => el.classList.remove("contact-menu__text--is-visible"))
  }
}

export default ContactMenu