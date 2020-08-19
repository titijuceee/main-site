import '../styles/styles.css'
import 'lazysizes'
import PageLoader from './modules/PageLoader'
import MobileMenu from './modules/MobileMenu'
import ContactMenu from './modules/ContactMenu'
import Modal from './modules/Modal'
import RevealItems from './modules/RevealItems'

new PageLoader();
new MobileMenu();
new ContactMenu();
new Modal();
new RevealItems(document.querySelectorAll(".section__img"), 55);
new RevealItems(document.querySelectorAll(".cards__item"), 75);

if (module.hot) {
    module.hot.accept()
}