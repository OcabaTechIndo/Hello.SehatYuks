/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
    static async GET_obat() {
        const response = await fetch(`${API_ENDPOINT.OBAT_LIST}`);
        const responseJSON = await response.json();
        return responseJSON.obat;
    }

    // eslint-disable-next-line no-empty-function
    static async userLogin(user) {
        const response = await fetch(`${API_ENDPOINT.LOGIN_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: user,
        });
        return response.json();
    }

    static async getArticle() {
        const response = await fetch('http://localhost:9090/article/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async detailObat(id) {
        const response = await fetch(`${API_ENDPOINT.DETAIL_OBAT(id)}`);
        return response.json();
    }

    static async getCovid() {
        const response = await fetch(`${API_ENDPOINT.COVID_LIST}`);
        return response.json();
    }

    static async detailCovid(id) {
        const response = await fetch(`${API_ENDPOINT.DETAIL_COVID(id)}`);
        return response.json();
    }
}

export default DataAPI;
