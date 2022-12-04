class DetailCovid extends HTMLElement {
    set detailCovid(value) {
        this._detailCovid = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card col-" id="covidCar" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
            <div class="card-body">
            <img src="" alt="ini g">
            <h3>${this._detailCovid.title}</h3>
            <P>  ${this._detailCovid.description}  </p>
            </div>
        </div>
        `;
    }
}

customElements.define('covid-detail-element', DetailCovid);
