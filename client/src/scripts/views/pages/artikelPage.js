import DataAPI from '../../data/dataAPI';
import '../templates/template-artikel';

const ArtikelPage = {
    async render() {
      return `
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
                <img src="${ar.image}" class="img-fluid gambarObat" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${ar.title} </h5>
            </div>
            <a href="#/detail_artikel/${ar.id}" id="bacaObat" class="btn btn-primary">Baca Info Lengkap</a>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center"><b>${ar.title}</b></h5>
            <p class="card-text bgObat">$${ar.description.slice(0, 150)}</p>
        </div>
        <a href="#/detail_artikel_page/${ar.id}" id="tombolBaca" class="btn btn-primary">Baca Info Lengkap</a>
    </div>
        `;
      });
   },
  };

  export default ArtikelPage;
