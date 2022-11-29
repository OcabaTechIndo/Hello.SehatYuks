import DataAPI from "../../data/dataAPI";
import '../templates/template-udara-segar';


const UdaraSegarPage = {
    async render() {
        return `
            <h1>Hello Ini adalah halaman Udara Segar</h1>
            <p> tinggal mengganti async after render dengan <br>
            API Udara segar nanti</p>
            <info-udara-segar></info-udara-segar>
            `;
      },

      async afterRender() {
        //tinggal ganti data api
        const dataUdaraSegar = await DataAPI.GET_obat();
        console.log(dataUdaraSegar);
        const containerUdara = document.querySelector('info-udara-segar');
        containerUdara.udaraSegarData = dataUdaraSegar;
      },
};

export default UdaraSegarPage;
