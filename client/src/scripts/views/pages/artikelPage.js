import DataAPI from '../../data/dataAPI';
import '../templates/template-artikel';

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
      const dataArtikel = await DataAPI.getArticle();
      const dataFix = dataArtikel.Article;
      const containerArtikel = document.querySelector('artikel-page');
      const elemAr = containerArtikel.elementListArticle;
      elemAr.innerHTML = '';

      dataFix.forEach((ar) => {
        elemAr.innerHTML += `
            <div class="col" id="artikelCar" style="width: 18rem;">
                <div class="card-body">
                <h2> ${ar.title} </h2>
                <P> ${ar.description} </p>
                </div>
                <a href="#" id="bacalingkungan" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
        `;
      });
   },
  };

  export default ArtikelPage;
