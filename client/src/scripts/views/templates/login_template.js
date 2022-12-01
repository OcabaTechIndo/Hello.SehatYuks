/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
class LoginUser extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get elementUserValidation() {
        return {
            elementButton: this.querySelector('#btn-submit-login'),
            emailElement: this.querySelector('#email'),
            passwordElement: this.querySelector('#password'),
        };
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
                    <div class="alert alert-danger alert-validation-danger" role="alert" hidden>
                        Invalid email or password !
                        Email atau Password Kamu salah
                    </div>
                    <div class="alert alert-danger alert-validation-danger-value" role="alert" hidden>
                    kamu belum memasukan pssword dan email
                </div>
                    <form class=" needs-validation validation-user p-5">
                        <div class="mb-3 text-start">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="email" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="*********" required>
                        </div>
                        <div class="container">
                        <div class="row">
                            <div class="col">
                                <button type="submit" id="btn-submit-login" class="btn btn-validation")>Success</button>
                            </div>
                            <div class="col" >
                            <p>Daftar</p>
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
    }
}

customElements.define('login-element', LoginUser);
