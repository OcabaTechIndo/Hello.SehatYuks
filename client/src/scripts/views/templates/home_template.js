/* eslint-disable no-tabs */
/* eslint-disable max-len */
class Home extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    set homeData(value) {
        this._homeData = value;
    }

    get dataElement() {
        return {
            elementCarousel: this.getElementsByTagName('span'),
            elementSliding: this.getElementsByClassName('card-product-obat'),
            spinnerElement: this.querySelector('#spinner'),
        };
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
        <div hidden id="spinner"></div>
            <h1 class="display-4">SEHAT YUKS</h1>
            <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
            <hr class="my-4">
            <p clas>Gaskeun jaga kesehatan</p>
            <a href="#" class="btn btn-primary btn-lg">Join Now</a>
        </div>
        <div class="container-home">
                <header>
                    <h1>Layanan Tersedia</h1>
                    <p>
                        <span class="button-slider">&#139;</span>
                        <span class="button-slider">&#155;</span>
                    </p>
                </header>
                <section class="home-list-element mb-5">
                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;">
                            <img src="../health-image1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Kesehatana Makanan</h5>
                            <p class="card-text">Tips Menjaga Kesehatan Dengan Mengatur Pola Makan</p>
                            <a href="#/food_page" class="btn btn-primary sliderButton">Cek Disini</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../health-image2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Covid 19</h5>
                            <p class="card-text">Dapatkan Berita Informasi Seputar Covid 19</p>
                            <a href="#/covid19" class="btn btn-primary sliderButton">Cek Disini</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../image-health3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Latihan Sehat</h5>
                            <p class="card-text">Melatih Mental Dengan Pola Sehat Hindari Stres</p>
                            <a href="#" class="btn btn-primary sliderButton">Cek Disini</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../image-helth 4.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Kesehatan Lingkungan</h5>
                            <p class="card-text">Sehat Dengan Lingkungan yang bersih</p>
                            <a href="#/lingkungan" class="btn btn-primary sliderButton">Masuk Komunitas</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                    <div class="card" style="width: 21rem;"">
                        <img src="../image-helth 4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Komunitas Linkungan</h5>
                        <p class="card-text">Komunitas Untuk Berbagi Informasi Lingkungan</p>
                        <a href="#/komunitas_lingkungan" class="btn btn-primary sliderButton">Cek Disini</a>
                        </div>
                    </div>
                </div>
                </section>
                </div>


        <div class="container baner-1">
        <div class="baner1">
        <div class="baner1-img">
        <img src="../Baner1.png" class="img-fluid" alt="Baner Kesehatan diri">
        </div>
        </div>
        
        <div class="baner1-grid">
        <div class="banerCar1a">
        <div class="card-product-obat">
        <div class="card">
            <img src="../health-image1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Kesehatana Makanan</h5>
            <p class="card-text">Tips Menjaga Kesehatan Dengan Mengatur Pola Makan</p>
            <a href="#/food_page" class="btn btn-primary sliderButton">Cek Disini</a>
            </div>
        </div>
    </div>
        </div>

        <div class="banerCar1b">
        <div class="card-product-obat">
        <div class="card">
            <img src="../image-health3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Latihan Sehat</h5>
            <p class="card-text">Melatih Mental Dengan Pola Sehat Hindari Stres</p>
            <a href="#" class="btn btn-primary sliderButton">Cek Disini</a>
            </div>
        </div>
    </div>
        </div>
        </div>
        </div>

<div clas="container">
<div class="baner2">

<img src="../Baner2.png" class="card-img-top" alt="...">

</div>
</div>


<div clas="container">
<div class="baner3">

<img src="../Baner3.png" class="card-img-top" alt="...">

</div>
</div>


        `;
    }
}

customElements.define('home-element', Home);
