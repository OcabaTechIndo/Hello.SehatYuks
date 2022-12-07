/* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-useless-return */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable semi */
// /* eslint-disable no-use-before-define */
// /* eslint-disable space-before-blocks */
// // import DataAPI from '../../data/dataAPI';
// // eslint-disable-next-line import/extensions
import DataAPI from '../../data/dataAPI';
import '../templates/page_komunitas_lingkungan';

// /* eslint-disable no-empty-function */
const KomunitasLingkunganPage = {
    async render() {
        return `
        <div class="nav-point">
        <nav class="ml-5" aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/home">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Komunitas</li>
            </ol>
        </nav>
        </div>
                <komunitas-lingkungan-element>
                </komunitas-lingkungan-element>
            `;
    },

    async afterRender() {
        const elementGetValue = document.querySelector('komunitas-lingkungan-element');
        const elementFixValueValid = elementGetValue.dataValueAnswer;
        const { answerElement, buttonAnswerElement } = elementFixValueValid;
        const data = {
            initiality: {
                answerElement,
                buttonAnswerElement,
            },
        };
        data.initiality.buttonAnswerElement.addEventListener('click', async () => {
            const dataFixUserCreate = data.initiality.answerElement;
            const tokenUser = JSON.parse(localStorage.getItem('tokenAPI'));
            const usernameData = JSON.parse(localStorage.getItem('userAccessToken'));
            if (usernameData == null) {
                console.log('Anda Belum Daftar');
                window.location.href = '#/login';
                return;
            }
            const { id } = usernameData;

            const datauser = await DataAPI.getUserById(id, tokenUser);

            if (datauser.success === 'data di temukan') {
                const { firstName } = datauser.data;
                const userData = {
                    name: firstName,
                    description: dataFixUserCreate.value,
                };
                console.log(userData);
                const userFix = JSON.stringify(userData);
                const dataCreate = await DataAPI.createAnswer(userFix);
                if (dataCreate.status === 'success') {
                    const spin = document.querySelector('#spinner');
                    spin.removeAttribute('hidden');
                    setTimeout(async () => {
                        spin.setAttribute('hidden', '');
                        window.location.href = '#/answer_view';
                    }, 3000);
                } else {
                    console.log('error');
                    return;
                }
                // eslint-disable-next-line no-unused-vars
            } else {
                const spin = document.querySelector('#spinner');
                spin.removeAttribute('hidden');
                setTimeout(async () => {
                    spin.setAttribute('hidden', '');
                    window.location.href = '#/login';
                }, 3000);
                return;
            }
        });
    },
};

export default KomunitasLingkunganPage;
