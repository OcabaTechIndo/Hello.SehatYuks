/* eslint-disable import/extensions */
import DataAPI from '../../data/dataAPI';
import UrlParser from '../../routes/URL_parser';
import '../templates/template_detail_covid';

const DetailCovidPage = {
    async render() {
        return `
                <covid-detail-element></covid-detail-element>
            `;
      },

      async afterRender() {
        // tinggal ganti nanti ama API lingkungan
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url.id);
        const detailCovidData = await DataAPI.detailCovid(url.id);
        const covidDetailElement = document.querySelector('covid-detail-element');
        console.log(covidDetailElement);
        console.log(detailCovidData.Covid);
        const dataFixCovid = detailCovidData.Covid[0];

        covidDetailElement.detailCovid = dataFixCovid;
      },
};

export default DetailCovidPage;
