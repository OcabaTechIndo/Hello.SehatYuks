/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '../scss/styles.scss';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/style-carousel.css';
import 'bootstrap';
import App from './views/app';
import swRegister from './utils/sw_register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
