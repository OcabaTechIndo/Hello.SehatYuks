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
        };
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
        <div class="container-home mt-2">
        <div class="row justify-content-between mt-5">
            <div class="col-4">
                <h1>Top Our Drug</h1>
            </div>
            <div class="col-4">
            <p>
            <span class="button-slider">&#139;</span>
            <span class="button-slider">&#155;</span>
         </p>
            </div>
        </div>


                <section class="home-list-element mb-5">
                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;">
                            <img src="../health-image1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title 1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../health-image2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title 2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../image-health3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title3</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                        <div class="card" style="width: 21rem;"">
                            <img src="../image-helth 4.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title4</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-product-obat">
                    <div class="card" style="width: 21rem;"">
                        <img src="../image-helth 4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Card title4</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="card-product-obat">
                <div class="card" style="width: 21rem;"">
                    <img src="../image-helth 4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title4</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
                </section>
        </div>
        `;
    }
}

customElements.define('home-element', Home);

// {/* <div id="carouselExampleIndicators" class="carousel slide slider-area" data-bs-ride="true">
// <h1 class="artikel-rekomendasi">Rekomendasi Artikel</h1>
// <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
//     aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
//     aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
//     aria-label="Slide 3"></button>
// </div>
// <div class="carousel-inner">
// <div class="carousel-item active">
//     <img src="../picDummy/slider1.webp" class="d-block w-100" alt="...">
//     <div class="carousel-caption d-none d-md-block">
//         <h1 class="display-4">SEHAT YUKS</h1>
//         <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//         Yuks cari tahu Info kesehatan disini</p>
//         <hr class="my-4">
//         <p clas>Gaskeun jaga kesehatan</p>
//         <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
//     </div>
// </div>
// <div class="carousel-item">
// <img src="../picDummy/slider2.webp" class="d-block w-100" alt="...">
// <div class="carousel-caption d-none d-md-block">
//     <h1 class="display-4">SEHAT YUKS</h1>
//     <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//     Yuks cari tahu Info kesehatan disini</p>
//     <hr class="my-4">
//     <p clas>Gaskeun jaga kesehatan</p>
//     <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
// </div>
// </div>
// <div class="carousel-item">
// <img src="../picDummy/slider3.jpeg" class="d-block w-100" alt="...">
// <div class="carousel-caption d-none d-md-block">
//     <h1 class="display-4">SEHAT YUKS</h1>
//     <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//     Yuks cari tahu Info kesehatan disini</p>
//     <hr class="my-4">
//     <p clas>Gaskeun jaga kesehatan</p>
//     <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
// </div>
// </div>
// </div>
// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
// <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
// <span class="carousel-control-next-icon" aria-hidden="true"></span>
// <span class="visually-hidden">Next</span>
// </button>
// </div>

// <div id="carouselExampleIndicators" class="carousel slide slider-area" data-bs-ride="true">
// <h1 class="artikel-rekomendasi">Rekomendasi Artikel</h1> */}
