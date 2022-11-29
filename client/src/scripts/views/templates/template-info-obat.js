/* eslint-disable space-before-blocks */
class Obat extends HTMLElement {
    set obatData(value) {
        this._obatData = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Info Obat</li>
        </ol>
        </nav>
            <div id="list_obat" class="list_container container">
                <img src="./logo/obat_heart.png" alt="">
                <p>Masih ragu cara memilih obat yang tepat? jangan khawatir, IRIS akan membantu kamu</p>
                <div id="searchObat" class"obatSearchContainer"></div>
                <div id="drop_list" class="list_content d-flex container text-center">
                <div class="row" id="obat_card_list"></div>
                </div>
            </div>
        `;
        const elementListObat = this.querySelector('#obat_card_list');
        elementListObat.innerHTML = '';
        this._obatData.forEach((obat) => {
            elementListObat.innerHTML += `
            <div class="card col-" id="obatCar" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obat.background.slice(0, 20)}</h5>
                    <p class="card-text">${obat.brand_name.slice(0, 10)}</p>
                    <p class="card-text">${obat.id}</p>
                    <p class="card-text">${obat.indicator.slice(0, 20)}</p>
                    <p class="card-text">${obat.name_general}</p>
                    <p class="card-text">${obat.numberdrugaccess}</p>
                    <p class="card-text">${obat.summary.slice(0, 20)}</p>
                </div>
                <a href="#/detailObatPage" id="bacaObat" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
            `;
        });
    }
}

customElements.define('obat-list', Obat);
