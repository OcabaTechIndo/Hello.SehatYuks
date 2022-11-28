/* eslint-disable space-before-blocks */
class Obat extends HTMLElement {
    set obatData(value) {
        this._obatData = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="list_obat" class="list_container">
                <h3>Home > Info obat</h3>
                <img src="./logo/obat_heart.png" alt="">
                <p>Masih ragu cara memilih obat yang tepat? jangan khawatir, IRIS akan membantu kamu</p>
                <div id="searchObat" class"obatSearchContainer"></div>
                <div id="drop_list" class="list_content d-flex">
                    <div id="obat_card_list"></div>
                </div>
            </div>
        `;
        const elementListObat = this.querySelector('#obat_card_list');
        elementListObat.innerHTML = '';
        this._obatData.forEach((obat) => {
            elementListObat.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${obat.background.slice(0, 20)}</h5>
                    <p class="card-text">${obat.brand_name.slice(0, 10)}</p>
                    <p class="card-text">${obat.id}</p>
                    <p class="card-text">${obat.indicator.slice(0, 20)}</p>
                    <p class="card-text">${obat.name_general}</p>
                    <p class="card-text">${obat.numberdrugaccess}</p>
                    <p class="card-text">${obat.summary.slice(0, 20)}</p>
                    <a href="#" class="btn btn-primary">Baca</a>
                </div>
            </div>
            `;
        });
    }
}

customElements.define('obat-list', Obat);
