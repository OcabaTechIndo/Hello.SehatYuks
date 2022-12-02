import UrlParser from '../../routes/URL_parser';
import DataAPI from '../../data/dataAPI';
import templateDetailObat from '../templates/template-detail-obat';

const detailObat = {
    async render() {
        return `
        <h1> Detail Obat page</h1>
        <div tabindex="0" class="container text-center">
        <div class="row" id="detailObat"></div>
        </div>
            `;
      },

      // eslint-disable-next-line no-empty-function
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url);
        const obat = await DataAPI.detailObat(url.id);
        const dataFix = obat.data[0];
        console.log(dataFix);
        const tampilkanDetailObat = document.querySelector('#detailObat');
        tampilkanDetailObat.innerHTML = templateDetailObat(dataFix);
      },
};

export default detailObat;
