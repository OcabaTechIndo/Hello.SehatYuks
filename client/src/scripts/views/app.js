import drawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/URL_parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    drawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async pageRender() {
    const URL_Route = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[URL];
    this._content.innerHTML = await page.render();
  }
}

export default App;
