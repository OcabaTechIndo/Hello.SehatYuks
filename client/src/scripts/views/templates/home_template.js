/* eslint-disable max-len */
class Home extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    set homeData(value) {
        this._homeData = value;
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">SEHAT YUKS</h1>
            <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
            <hr class="my-4">
            <p clas>Gaskeun jaga kesehatan</p>
            <a href="#" class="btn btn-primary btn-lg">Join Now</a>
        </div>
        <div class="container">
                <div id="slider_container"></div>
        </div>
        `;

        const sliderContainer = document.querySelector('#slider_container');
        sliderContainer.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide slider-area" data-bs-ride="true">
            <h1 class="artikel-rekomendasi">Rekomendasi Artikel</h1>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../picDummy/slider1.webp" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-4">SEHAT YUKS</h1>
                    <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                    Yuks cari tahu Info kesehatan disini</p>
                    <hr class="my-4">
                    <p clas>Gaskeun jaga kesehatan</p>
                    <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
                </div>
            </div>
            <div class="carousel-item">
            <img src="../picDummy/slider2.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">SEHAT YUKS</h1>
                <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
                <hr class="my-4">
                <p clas>Gaskeun jaga kesehatan</p>
                <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../picDummy/slider3.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">SEHAT YUKS</h1>
                <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
                <hr class="my-4">
                <p clas>Gaskeun jaga kesehatan</p>
                <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide slider-area" data-bs-ride="true">
        <h1 class="artikel-rekomendasi">Rekomendasi Artikel</h1>
        `;

        const homeContainer = document.querySelector('#container');
        homeContainer.appendChild(sliderContainer);
    }
}

customElements.define('home-element', Home);

{/* <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../picDummy/slider1.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">SEHAT YUKS</h1>
                <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
                <hr class="my-4">
                <p clas>Gaskeun jaga kesehatan</p>
                <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../picDummy/slider2.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">SEHAT YUKS</h1>
                <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
                <hr class="my-4">
                <p clas>Gaskeun jaga kesehatan</p>
                <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../picDummy/slider3.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="display-4">SEHAT YUKS</h1>
                <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
                Yuks cari tahu Info kesehatan disini</p>
                <hr class="my-4">
                <p clas>Gaskeun jaga kesehatan</p>
                <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div> */}