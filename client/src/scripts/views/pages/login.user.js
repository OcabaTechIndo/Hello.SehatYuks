/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import '../templates/login_template';

const userLogin = {
    async render() {
        return `
            <login-element></login-element>
        `;
    },

    async afterRender() {
    },
};

export default userLogin;
