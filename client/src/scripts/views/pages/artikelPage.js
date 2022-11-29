import DataAPI from "../../data/dataAPI";
import '../templates/template-artikel.js';

const ArtikelPage = {
    async render() {
      return `
        <h1>Hello World Artikel Page</h1>
        <p> nanti tinggal ubah api </p>
        <artikel-page></artikel-page>
      `;
    },

    // eslint-disable-next-line no-empty-function
    async afterRender() {
      //tinggal ganti data api
      const dataArtikel = await DataAPI.GET_obat();
      console.log(dataArtikel);
      const containerArtikel = document.querySelector('artikel-page');
      containerArtikel.artikelSehat = dataArtikel;
    },
  };

  export default ArtikelPage;
