class RegistUserTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get dataValueRegister() {
        return {
            firstName: this.querySelector('#first_name'),
            lastName: this.querySelector('#last_name'),
            email: this.querySelector('#email'),
            password: this.querySelector('#email'),
            form: this.querySelector('form'),
            gender: this.querySelector('#gender'),
            phone: this.querySelector('#phone'),
        };
    }

    render() {
        this.innerHTML = `
        <div id="app">
        <section class="section">
          <div class="container mt-5">
          <div hidden id="spinner"></div>
          <div class="alert alert-danger alert-user alert-validation-danger fs-6" role="alert" hidden>
          Invalid email or password !
          Email atau Password Kamu salah </div> 
          <div class="alert alert-danger alert-user alert-validation-danger-value" role="alert" hidden>
            Maukan Semua data yang kosong
          </div>
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
    
                <div class="card card-primary">
                  <div class="card-header"><h4>Register</h4></div>
    
                  <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="first_name">First Name</label>
                          <input id="first_name" type="text" class="form-control" autofocus>
                        </div>
                        <div class="form-group col-6">
                          <label for="last_name">Last Name</label>
                          <input id="last_name" type="text" class="form-control">
                        </div>
                      </div>
    
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="form-control">
                        <div class="invalid-feedback">
                        </div>
                      </div>
    
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="password" class="d-block">Password</label>
                          <input id="password" type="text" class="form-control pwstrength" data-indicator="pwindicator">
                          <div id="pwindicator" class="pwindicator">
                            <div class="bar"></div>
                            <div class="label"></div>
                          </div>
                        </div>
                        <div class="form-group col-6">
                          <label for="phone" class="d-block">Phone</label>
                          <input id="phone" type="text" class="form-control">
                        </div>
                      </div>   
                      <label>Gender</label>
                      <select class="form-control selectric" id="gender">
                        <option>Laki Laki</option>
                        <option>Perempuan</option>
                      </select> 
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-sm btn-block mt-3">
                          Buat Akun Yuks
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="simple-footer">
                  Copyright &copy; Stisla 2018
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        `;
    }
}

customElements.define('register-element', RegistUserTemplate);
