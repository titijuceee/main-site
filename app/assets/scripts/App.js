import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import ContactMenu from './modules/ContactMenu'
import Modal from './modules/Modal'

new MobileMenu();
new ContactMenu();
new Modal();

if (module.hot) {
    module.hot.accept()
}