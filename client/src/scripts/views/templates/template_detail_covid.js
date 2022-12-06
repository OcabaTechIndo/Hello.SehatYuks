class DetailCovid extends HTMLElement {
    set detailCovid(value) {
        this._detailCovid = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="kiri">
        <div class="detail-view gambarObat">
        <h5 class="card-title titlePage">${this._detailCovid.title}</h5>
        <img src="${this._detailCovid.image}" class="card-img-top" alt="Gamabar Obat ${this._detailCovid.title}">
        </div>
        </div>
        <div class="kanan">
        <div class="detail-view deskripsiObat"
                <p class="card-text">${this._detailCovid.description}</p>
        </div>
        </div>
        `;
    }
}

customElements.define('covid-detail-element', DetailCovid);
