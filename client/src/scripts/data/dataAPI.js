import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
        static async GET_obat() {
                const response = await fetch(`${API_ENDPOINT.OBAT_LIST}`);
                const responseJSON = await response.json();
                return responseJSON.obat;
        }
}
export default DataAPI;
