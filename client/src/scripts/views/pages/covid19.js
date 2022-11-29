import DataAPI from "../../data/dataAPI";
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
        //tinggal ganti data api
        const dataCovid19 = await DataAPI.GET_obat();
        console.log(dataCovid19);
        const containerCovid19 = document.querySelector('info-covid19');
        containerCovid19.covidData = dataCovid19;
      },
};

export default Covid19Page;
