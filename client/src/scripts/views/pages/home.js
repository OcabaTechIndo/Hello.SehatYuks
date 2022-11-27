/* eslint-disable no-empty-function */
import '../templates/home_template';

const HomePage = {
  async render() {
    return `
          <home-element></home-element>
          `;
  },

  async afterRender() {

  },

};

export default HomePage;
