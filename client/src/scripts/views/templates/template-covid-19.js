class covid19 extends HTMLElement {
    set covidData(value) {
        this._covidData = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Info Covid-19</li>
        </ol>
        </nav>
        <div id="drop_list" class="list_content d-flex container text-center">
        <div class="container row" id="areaCovid19"></div>
        </div>
        `;

        const infoCovid19 = this.querySelector('#areaCovid19');
        infoCovid19.innerHTML = '';
        this._covidData.forEach((/*belum apa variabel */) => {
            infoCovid19.innerHTML += `
            <div class="card col-" id="covidCar" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                <img src="" alt="ini gambar">
                <h2> Judul Info kesehatan </h2>
                <P> loren ipsum bklalalallala </p>
                </div>
                <a href="#/detaillingkunganPage" id="bacalingkungan" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
            `;
        });
    }
}

customElements.define('info-covid19', covid19);