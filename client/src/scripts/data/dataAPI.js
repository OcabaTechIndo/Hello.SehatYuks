/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
    static async GET_obat() {
        const response = await fetch(`${API_ENDPOINT.OBAT_LIST}`);
        const responseJSON = await response.json();
        return responseJSON.obat;
    }

    // eslint-disable-next-line no-empty-function
    static async userLogin(user) {
        const response = await fetch('http://localhost:9090/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: user,
        });
        return response.json();
    }

    // static async getUser(){
    //     const response
    // }
}

export default DataAPI;
