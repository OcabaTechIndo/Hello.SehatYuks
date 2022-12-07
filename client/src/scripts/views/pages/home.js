/* eslint-disable no-empty-function */
import '../templates/home_template';

const HomePage = {
    async render() {
        return `
          <home-element></home-element>
          `;
    },

    async afterRender() {
        const elementFix = document.querySelector('home-element');
        const elementData = elementFix.dataElement;

        const { elementCarousel, elementSliding } = elementData;
        console.log(elementCarousel);
        console.log(elementSliding);
        /* eslint-disable eqeqeq */
        /* eslint-disable space-before-blocks */
        /* eslint-disable prefer-template */
        /* eslint-disable keyword-spacing */
        /* eslint-disable no-restricted-syntax */
        /* eslint-disable camelcase */
        const span = elementCarousel;
        const product = elementSliding;
        const product_page = Math.ceil(product.length / 4);
        let l = 0;
        let movePer = 64.34;
        let maxMove = 90;
        // mobile_view
        const mob_view = window.matchMedia('(max-width: 900px)');
        if (mob_view.matches) {
            movePer = 40.36;
            maxMove = 504;
        }

        const right_mover = () => {
            l += movePer;
            if (product == 1) { l = 0; }
            for (const i of product) {
                if (l > maxMove) { l -= movePer; }
                i.style.left = '-' + l + '%';
            }
        };
        const left_mover = () => {
            l -= movePer;
            if (l <= 0) { l = 0; }
            for (const i of product) {
                if (product_page > 1) {
                    i.style.left = `-${l}%`;
                }
            }
        };
        span[1].onclick = () => { right_mover(); };
        span[0].onclick = () => { left_mover(); };
    },

};

export default HomePage;
