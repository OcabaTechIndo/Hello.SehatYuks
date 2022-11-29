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

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const obat = await DataAPI.GET_obat(url.id);
        const tampilkanDetailObat = document.querySelector('#detailObat');
        console.log(obat);
        tampilkanDetailObat.innerHTML = '';
        tampilkanDetailObat.innerHTML = templateDetailObat(obat);
    },
};

export default detailObat;