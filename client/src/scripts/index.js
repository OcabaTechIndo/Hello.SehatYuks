/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '../scss/styles.scss';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
