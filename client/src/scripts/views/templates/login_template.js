class LoginUser extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div hidden id="spinner"></div>
        <div class="container-sm">
        <nav class="ml-5" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#/home">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Login User</li>
            </ol>
        </nav>
        <div>
        <div class="container px-4 text-center">
                <div class="row justify-content-evenly">
                    <div class="col-4">
                    <form class=" needs-validation validation-user p-5">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*********">
                        </div>
                        <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <button type="button" class="btn btn-validation")>Success</button>
                            </div>
                            <div class="col">
                            2 of 2
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div class="col-4 p-5">
                        <div class="card card-right-validation P-5">
                            <img src="./logo/hero2.webp" class="card-img" alt="Sehat Yuks">
                            <div class="card-img-overlay">
                                <h5 class="card-title">Bergabung Sekarang</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        const element = this.querySelector('.btn-validation');
        const spin = this.querySelector('#spinner');
        element.addEventListener('click', () => {
            spin.removeAttribute('hidden');
            setTimeout(() => {
                spin.setAttribute('hidden', '');
                window.location.href = '#/lingkungan';
            }, 1000);
        });
    }
}

customElements.define('login-element', LoginUser);
