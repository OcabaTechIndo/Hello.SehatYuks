/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '../scss/styles.scss';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import App from './views/app';
import swRegist from './utils/serviceWorkerRegist';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
  // obat: document.querySelector('#hasil'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.pageRender();
  swRegist();
});
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
