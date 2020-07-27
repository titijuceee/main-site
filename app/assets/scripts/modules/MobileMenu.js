class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon")
    this.mainMenu = document.querySelector(".main-menu")
    this.menuItem = document.querySelectorAll(".main-menu__item")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    this.menuItem.forEach(el => el.addEventListener("click", () => this.hideTheMenu()))
  }

  toggleTheMenu() {
    this.mainMenu.classList.toggle("main-menu--is-open")
    this.menuIcon.classList.toggle("menu-icon--close-x")
  }
  hideTheMenu() {
    this.mainMenu.classList.remove("main-menu--is-open")
    this.menuIcon.classList.remove("menu-icon--close-x")
  }
}

export default MobileMenu