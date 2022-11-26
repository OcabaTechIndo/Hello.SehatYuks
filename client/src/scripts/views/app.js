import UrlParser from '../routes/URL_parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, obat }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._obat = obat;
  }

  async renderPage() {
    const URLRoute = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[URLRoute];
    this._obat.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
