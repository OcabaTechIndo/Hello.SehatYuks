class LingkunganTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get dataValueAnswer() {
        return {
            answerElement: this.querySelector('#answer'),
            buttonAnswerElement: this.querySelector('#buttonElementAnswer'),
            containerElement: this.querySelector('#card_user_answer'),
        };
    }

    render() {
        this.innerHTML = `
        <div class="container px-4 p-5">
        <div hidden id="spinner"></div>
            <div class="text-center">
                <h2>Hallo Selamat Datang di Komunitas Lingkungan</h2>
            </div>
            <div class="row p-5">
                <div class="col-4">
                    <div class="p-3 border bg-light">
                    <form>
                        <div class="mb-3">
                            <label for="answer" class="form-label"></label>
                            <textarea class="form-control" id="answer" placeholder="Masukkan Pertanyaan" required rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-info" id="buttonElementAnswer">Info</button>
                        </form>
                    </div>
                </div>
                <div class="col-8" id="card_user_answer">
              
                </div>
            </div>


        </div>
        `;
    }
}

customElements.define('komunitas-lingkungan-element', LingkunganTemplate);