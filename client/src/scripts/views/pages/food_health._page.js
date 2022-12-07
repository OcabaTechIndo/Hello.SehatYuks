/* eslint-disable import/extensions */
// import DataAPI from '../../data/dataAPI';
// import UrlParser from '../../routes/URL_parser';
import DataAPI from '../../data/dataAPI';
import '../templates/template_food_health';

const FoodHealthPage = {
    async render() {
        return `
                <template-food-health></template-food-health>
            `;
      },

      // eslint-disable-next-line no-empty-function
      async afterRender() {
        const elementFood = document.querySelector('template-food-health');
        const fixElement = elementFood.elementDataFood;
        const { innerFood } = fixElement;

        const dataFood = await DataAPI.getFoodHealth();
        dataFood.food.forEach((fod) => {
            innerFood.innerHTML += `

            <div class="card text-left col-" id="containerCar" style="width: 18rem;">
            <div class="text-center divGambarArtikel">
                <img src="${fod.image}" class="img-fluid gambarObat" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${fod.title} </h5>
            </div>
            <a href="#/detail_food_page/${fod.id}" id="tombolBaca" class="btn btn-primary">Baca Info Lengkap</a>
        </div>
        </div>
    </div>
            `;
        });
      },
};

export default FoodHealthPage;
