/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
// import API_ENDPOINT from '../globals/api_endpoint';

class DataAPI {
    static async GET_obat() {
        const response = await fetch('http://localhost:9090/obat/list', {
            headers: {
                Accept: 'application/json',
                Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMSwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdCIsImdlbmRlciI6InRlc3QiLCJlbWFpbCI6InRlc3QiLCJudW1iZXIiOiIxMzM0MzI0NCJ9LCJpYXQiOjE2Njk3NDcwMzUsImV4cCI6MTY2OTc1MDYzNX0.Odd2n_GolgKQVRsg1ai8ngvM3HUrzLk0IdulsebNuLw',
            },
        });
        const responseJSON = await response.json();
        return responseJSON.obat;
    }
}

export default DataAPI;
