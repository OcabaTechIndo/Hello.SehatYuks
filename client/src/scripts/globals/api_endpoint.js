import GLOBAL_VAR from './golbalVariabel';

const API_ENDPOINT = {
    OBAT_LIST: `${GLOBAL_VAR.URL}obat/list`,
    LOGIN_USER: `${GLOBAL_VAR.URL}user/login`,
    DETAIL_OBAT: (id) => `${GLOBAL_VAR.URL}obat/detail/${id}`,
};

export default API_ENDPOINT;
