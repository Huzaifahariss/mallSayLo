import React from "react";

export default function Login() {
  return (
    <div>
      <>
        <main className="main pages">
          <div className="page-header breadcrumb-wrap">
            <div className="container">
              <div className="breadcrumb">
                <a href="index.html" rel="nofollow">
                  <i className="fi-rs-home mr-5" />
                  Home
                </a>
                <span> Login</span>
              </div>
            </div>
          </div>
          <div className="page-content pt-150 pb-150">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                  <div className="row">
                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                      <img
                        className="border-radius-15"
                        src="././assets/imgs/page/login-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-8">
                      <div className="login_wrap widget-taber-content background-white">
                        <div className="padding_eight_all bg-white">
                          <div className="heading_s1">
                            <h1 className="mb-5">Login</h1>
                            <p className="mb-30">
                              Don't have an account?
                              <a href="/register/Register.html">Create here</a>
                            </p>
                          </div>
                          <form method="post">
                            <div className="form-group">
                              <input
                                type="text"
                                required=""
                                name="email"
                                placeholder="Username or Email *"
                                defaultValue="adeeba@gmail.com"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                required=""
                                type="password"
                                name="password"
                                defaultValue="adeeba"
                                placeholder="Your password *"
                              />
                            </div>

                            <div className="login_footer form-group mb-50">
                              <div className="chek-form">
                                <div className="custome-checkbox">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="checkbox"
                                    id="exampleCheckbox1"
                                    defaultValue=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleCheckbox1"
                                  >
                                    <span>Remember me</span>
                                  </label>
                                </div>
                              </div>
                              <a
                                aria-label="Quick view"
                                className="action-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                              >
                                Forget Password
                              </a>
                            </div>
                            <div className="form-group">
                              <a
                                type="submit"
                                className="btn btn-heading btn-block hover-up"
                                name="login"
                                href="/user dashboard/user-account.html"
                              >
                                Log in
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}
