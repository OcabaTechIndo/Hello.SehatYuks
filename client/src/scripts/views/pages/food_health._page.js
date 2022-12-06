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
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${fod.image}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${fod.title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${fod.brief_description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
        });
      },
};

export default FoodHealthPage;
