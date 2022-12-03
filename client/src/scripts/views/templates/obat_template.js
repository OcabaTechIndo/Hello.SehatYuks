class Obat extends HTMLElement {
    set ObatTemplate(obat) {
        this._ObatTemplate = obat;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="list_obat" class="list_container">
                <h3>Home > Artikel</h3>
                <img src="./logo/obat_heart.png" alt="">
                <p>Masih ragu cara memilih obat yang tepat? jangan khawatir, IRIS akan membantu kamu</p>
                <div id="searchObat" class"obatSearchContainer"></div>
                <div id="drop_list" class="list_content"></div>    
            </div>
        `;

        const obatListContainer = this.querySelector('#drop_list');
        obatListContainer.innerHTML = '';
        this._ObatTemplate.forEach((obat) => {
            obatListContainer.innerHTML += `
                <div tabindex="0" class="katalog">
                    <div class="detailObats">
                        <h3 class="namaObat">${obat.name_general}</h3>
                        <img class="fotoObats" src="../picDummy/obat.webp" alt="Gambar obat .." />
                        <p class="rating">${obat.brand_name}</p>
                        <p class="keterangan">${obat.summary.slice(0, 200)}</p>
                        </div>
                    <button class="beli-obat">Lihat Info</button>
                </div>
            `;
        });
    }
}

customElements.define('obat-list', Obat);
