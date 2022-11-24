class Artikel extends HTMLElement {
    set artikelSehat(sehat) {
        this._artikelSehat = sehat;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="list_artikel" class="list_container">
            <h3>Home > Info Kesehatan</h3>
            <div id="drop_list" class="list_content"></div>
        </div>
        `;

        const artikelContainer = this.querySelector('#drop_list');
        artikelContainer.innerHTML = '';
        artikelContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href="#" class="btn btn-primary">Baca</a>
                </div>
            </div>
        `;
    }
}

customElements.define('artikel-container', Artikel);