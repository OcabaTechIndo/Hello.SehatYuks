/* eslint-disable import/extensions */
import DataAPI from '../../data/dataAPI';
import '../templates/template-lingkungan.js';

const LingkunganPage = {
    async render() {
        return `
        <h1> halaman info lingkungan </h1>
        <p> Masih menggunakan api obat <br> tinggal ganti saja nanti
        di bagian async afterRender</p>
            <info-lingkungan></info-lingkungan>
            `;
      },

      async afterRender() {
        // tinggal ganti nanti ama API lingkungan
        const dataLingkungan = await DataAPI.GET_obat();
        console.log(dataLingkungan);
        const containerLingkungan = document.querySelector('info-lingkungan');
        containerLingkungan.lingkunganData = dataLingkungan;
      },
};

export default LingkunganPage;
