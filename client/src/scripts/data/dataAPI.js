/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
// import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
    static async GET_obat() {
        const response = await fetch('http://localhost:9090/obat/list');
        const responseJSON = await response.json();
        return responseJSON.obat;
    }
}

export default DataAPI;
