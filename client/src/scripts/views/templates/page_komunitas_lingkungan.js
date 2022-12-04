class LingkunganTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container px-4">
            <div class="text-center">
                <h2>Hallo Selamat Datang di Komunitas Lingkungan</h2>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="p-3 border bg-light">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-info">Info</button>
                    </div>
                </div>
                <div class="col-8">
                <div class="card">
                <div class="card-header">
                  Quote
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
              </div>
                </div>
            </div>


        </div>
        `;
    }
}

customElements.define('komunitas-lingkungan-element', LingkunganTemplate);
