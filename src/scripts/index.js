/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
});

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
