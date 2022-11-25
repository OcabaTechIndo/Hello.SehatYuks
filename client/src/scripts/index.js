/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '../scss/styles.scss';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import App from './views/app';
import API_ENDPOINT from './globals/api_endpoint';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.pageRender();
});

window.addEventListener('load', () => {
  app.pageRender();
});
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
