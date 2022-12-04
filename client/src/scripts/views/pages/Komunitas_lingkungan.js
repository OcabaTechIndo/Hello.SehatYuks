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
                const { id } = usernameData;
                const datauser = await DataAPI.getUserById(id, tokenUser);
                const { firstName } = datauser.data;

                if (datauser.success === 'data di temukan') {
                    const userData = {
                        name: firstName,
                        description: dataFixUserCreate.value,
                    };
                    console.log(userData);
                    const userFix = JSON.stringify(userData);
                    await DataAPI.createAnswer(userFix);
                    // console.log(dataAnswer.Answer);
                    // if (dataAnswer.status === 'success'){

                    // } else {
                    //     console.log('error');
                    // }

                    // eslint-disable-next-line no-unused-vars
                } else {
                    console.log('Kamu Belum Login');
                    // eslint-disable-next-line no-useless-return
                    return;
                }
            });
            const getAllAnswer = await DataAPI.getAnswer();

            const userFunctional = () => {
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
            };
            userFunctional();
      },
};

export default KomunitasLingkunganPage;
