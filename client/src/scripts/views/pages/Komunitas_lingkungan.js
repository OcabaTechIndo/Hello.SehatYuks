/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable semi */
/* eslint-disable no-use-before-define */
/* eslint-disable space-before-blocks */
// import DataAPI from '../../data/dataAPI';
// eslint-disable-next-line import/extensions
// import DataAPI from '../../data/dataAPI';
import DataAPI from '../../data/dataAPI';
import '../templates/page_komunitas_lingkungan';

/* eslint-disable no-empty-function */
const KomunitasLingkunganPage = {
    async render() {
        return `
                <komunitas-lingkungan-element>
                </komunitas-lingkungan-element>
            `;
      },

      async afterRender() {
        const elementGetValue = document.querySelector('komunitas-lingkungan-element');
        const elementFixValueValid = elementGetValue.dataValueAnswer;
        const { answerElement, buttonAnswerElement, containerElement } = elementFixValueValid;
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
                    window.location.href = '#/login'
                    return
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
                            getItem();
                        }, 3000);
                    } else {
                        console.log('error');
                        return;
                    }
                    // eslint-disable-next-line no-unused-vars
                } else {
                    console.log('Kamu Belum Login');
                    // eslint-disable-next-line no-useless-return
                    return;
                }
            });

        const getAllAnswer = await DataAPI.getAnswer();
        const getAllCreate = () => {
            getAllAnswer.answer.forEach((answ) => {
                containerElement.innerHTML += `
                <div class="card mt-5">
                <div class="card-header">
                    ${answ.name}
                </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>${answ.description}</p>
                            <span class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></span>
                        </blockquote>
                    </div>
                </div>
                `;
            });
        } 
        const getItem = () => {
            if (window.location.pathname === '/'){
                getAllCreate();
            }
        }
      },
};

export default KomunitasLingkunganPage;
