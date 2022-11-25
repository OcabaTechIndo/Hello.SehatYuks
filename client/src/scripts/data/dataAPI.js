import GLOBAL_VAR from "../globals/golbalVariabel";
import API_ENDPOINT from "../globals/api_endpoint";

class DataAPI {
    static async GET_obat() {
        const response = await fetch(`${GLOBAL_VAR.URL}/list`);
        const responseJSON = await response.json();
        return responseJSON.
    }
}