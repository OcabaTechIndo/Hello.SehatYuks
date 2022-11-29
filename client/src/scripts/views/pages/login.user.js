/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

const userLogin = {
    async render() {
        return `
        <div class="container-sm">
        <nav class="ml-5" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#/home">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Login User</li>
            </ol>
        </nav>
        <div>
        <div class="container px-4 text-center">
            <div class="row gx-5">
                <div class="col">
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
                                <button type="button" class="btn btn-validation">Success</button>
                            </div>
                            <div class="col">
                            2 of 2
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `;
    },

    async afterRender() {

    },
};

export default userLogin;
