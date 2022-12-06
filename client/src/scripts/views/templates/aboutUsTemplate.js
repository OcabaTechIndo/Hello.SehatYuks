class AboutUs extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="profil_content" class="profil_container">
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="" alt="Foto Front End 1 Muhammad Ilham F">
                            <figcaption>Muhammad Ilham F</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>Muhammad Ilham Febriana</p>
                        <p>Jakarta, 26 February 2001</p>
                        <p>Depok, Jawa Barat</p>
                        <p>Universitas Pertamina</p>
                        <p>Front End Developer</p>
                        <a href="https://github.com/Understrike123">GitHub</a>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="" alt="">
                            <figcaption>nama</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>nama</p>
                        <p>umur</p>
                        <p>asal</p>
                        <p>instansi asal</p>
                        <p>role pembuatan website ini</p>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="" alt="">
                            <figcaption>nama</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>nama</p>
                        <p>umur</p>
                        <p>asal</p>
                        <p>instansi asal</p>
                        <p>role pembuatan website ini</p>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="" alt="">
                            <figcaption>nama</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>nama</p>
                        <p>umur</p>
                        <p>asal</p>
                        <p>instansi asal</p>
                        <p>role pembuatan website ini</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('about-us', AboutUs);
