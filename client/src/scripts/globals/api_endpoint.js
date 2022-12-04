import GLOBAL_VAR from './golbalVariabel';

const API_ENDPOINT = {
    OBAT_LIST: `${GLOBAL_VAR.URL}obat/list`,
    LOGIN_USER: `${GLOBAL_VAR.URL}user/login`,
    DETAIL_OBAT: (id) => `${GLOBAL_VAR.URL}obat/detail/${id}`,
    COVID_LIST: `${GLOBAL_VAR.URL}covid/list`,
    DETAIL_COVID: (id) => `${GLOBAL_VAR.URL}covid/detail/${id}`,
    CREATE_ANSWER: `${GLOBAL_VAR.URL}answer/add`,
    GET_USER: `${GLOBAL_VAR.URL}user/list`,
    GET_USER_BY_ID: (id) => `${GLOBAL_VAR.URL}user/id/${id}}`,
    GET_ANSWER: `${GLOBAL_VAR.URL}answer/list`,
};

export default API_ENDPOINT;
