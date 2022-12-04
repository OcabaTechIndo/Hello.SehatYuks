/* eslint-disable import/extensions */
// import DataAPI from '../../data/dataAPI';
import UrlParser from '../../routes/URL_parser.js';
import DataAPI from '../../data/dataAPI.js';
import '../templates/template-lingkungan.js';

const LingkunganPage = {
    async render() {
        return `
                <template-info-lingkungan></template-info-lingkungan>
            `;
      },

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

export default LingkunganPage;
