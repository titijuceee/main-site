class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".menu-icon")
    this.mainMenu = document.querySelector(".main-menu")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.mainMenu.classList.toggle("main-menu--is-open")
    this.menuIcon.classList.toggle("menu-icon--close-x")
  }
}

export default MobileMenu