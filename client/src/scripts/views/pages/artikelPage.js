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
            <div class="card text-left col-" id="obatCar" style="width: 18rem;">
            <div class="text-center divGambarObat">
                <img src="" class="img-fluid gambarObat" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${ar.title} </h5>
                <p class="card-text">${ar.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name General Grug : </li>
            </ul>
            <a href="#/detail_obat_page/" id="bacaObat" class="btn btn-primary">Baca Info Lengkap</a>
        </div>
        `;
      });
   },
  };

  export default ArtikelPage;
