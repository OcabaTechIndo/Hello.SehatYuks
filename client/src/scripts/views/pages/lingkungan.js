/* eslint-disable import/extensions */
import DataAPI from '../../data/dataAPI.js';
import '../templates/template-lingkungan.js';

const LingkunganPage = {
    async render() {
        return `
                <template-info-lingkungan></template-info-lingkungan>
            `;
      },

      async afterRender() {
        const dataEnvirontment = await DataAPI.getLingkungan();
        console.log(dataEnvirontment);
        const elementEnvirontment = document.querySelector('template-info-lingkungan');
        const listLingkungan = elementEnvirontment.lingkunganData;
        const { areaList } = listLingkungan;
        areaList.innerHTML = '';
        dataEnvirontment.Lingkungan.forEach((envi) => {
          areaList.innerHTML += `
            <div class="card col-" id="lingkunganCar" style="width: 18rem;">
            <img src="${envi.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h4>${envi.title}</h4>
                </div>
                <a href="#/detail_lingkungan/${envi.id}" id="bacalingkungan" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
            `;
        });
      },
};

export default LingkunganPage;
