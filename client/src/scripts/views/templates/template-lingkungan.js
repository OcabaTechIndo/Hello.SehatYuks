/* eslint-disable max-len */
class Lingkungan extends HTMLElement {
    set lingkunganData(value) {
        this._lingkunganData = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Info Lingkungan</li>
        </ol>
        </nav>
        <div id="drop_list" class="list_content d-flex container text-center">
        <div class="container row" id="areaLingkungan"></div>
        </div>
        `;

        const infoLingkungan = this.querySelector('#areaLingkungan');

        // JANGAN DI HAPUS

     /*   infoLingkungan.innerHTML = '';
        this._lingkunganData.forEach((lingkungan) => {
            infoLingkungan.innerHTML += `
            <div class="card col-" id="obatCar" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${lingkungan.background.slice(0, 20)}</h5>
                    <p class="card-text">${lingkungan.brand_name.slice(0, 10)}</p>
                    <p class="card-text">${lingkungan.id}</p>
                    <p class="card-text">${lingkungan.indicator.slice(0, 20)}</p>
                    <p class="card-text">${lingkungan.name_general}</p>
                    <p class="card-text">${lingkungan.numberdrugaccess}</p>
                    <p class="card-text">${lingkungan.summary.slice(0, 20)}</p>
                </div>
                // eslint-disable-next-line max-len, max-len
                <a href="#/detaillingkunganPage" id="bacalingkungan" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
            `;
            */

            // ini hanya trmplate nanti yang di atas tinggal ganti parameter API

        infoLingkungan.innerHTML = '';
        this._lingkunganData.forEach(() => {
            infoLingkungan.innerHTML += `
            <div class="card col-" id="lingkunganCar" style="width: 18rem;">
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

customElements.define('template-info-lingkungan', Lingkungan);
