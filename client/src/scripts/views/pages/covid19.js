import DataAPI from '../../data/dataAPI';
// eslint-disable-next-line import/extensions
import '../templates/template-covid-19.js';

/* eslint-disable no-empty-function */
const Covid19Page = {
    async render() {
        return `
            <h1>Hello Ini adalah halaman Covid 19</h1>
            <p> tinggal mengganti async after render dengan <br>
            API covid-19 nanti</p>
            <info-covid19></info-covid19>
            `;
      },

      async afterRender() {
        const dataCovid19 = await DataAPI.getCovid();
        const dataFixCovid = dataCovid19.Covid;
        const containerCovid19 = document.querySelector('info-covid19');
        containerCovid19.covidData = dataFixCovid;
      },
};

export default Covid19Page;
