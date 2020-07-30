import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import ContactMenu from './modules/ContactMenu'

new MobileMenu();
new ContactMenu();

if (module.hot) {
    module.hot.accept()
}