import React from "react";

export default function signup() {
  return (
    <div>
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                <i className="fi-rs-home mr-5" />
                Home
              </a>
              <span>
                {" "}
                Register <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">Create an Account</h1>
                          <p className="mb-30">
                            Already have an account?
                            <a href="/login/login.html">Login</a>
                          </p>
                        </div>
                        <form method="post">
                          <div className="form-group">
                            <input
                              type="text"
                              required=""
                              name="fullname"
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              required=""
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              required=""
                              name="PhoneNum"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              required=""
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              required=""
                              type="password"
                              name="password"
                              placeholder="Confirm password"
                            />
                          </div>
                          <div className="login_footer form-group">
                            <div className="chek-form">
                              <input
                                type="text"
                                required=""
                                name="email"
                                placeholder="Security code *"
                              />
                            </div>
                            <span className="security-code">
                              <b className="text-new">8</b>
                              <b className="text-hot">6</b>
                              <b className="text-sale">7</b>
                              <b className="text-best">5</b>
                            </span>
                          </div>
                          <div className="payment_option mb-50">
                            <div className="custome-radio">
                              <input
                                className="form-check-input"
                                required=""
                                type="radio"
                                name="payment_option"
                                id="exampleRadios3"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleRadios3"
                                data-bs-toggle="collapse"
                                data-target="#bankTranfer"
                                aria-controls="bankTranfer"
                              >
                                I am a customer
                              </label>
                            </div>
                            <div className="custome-radio">
                              <input
                                className="form-check-input"
                                required=""
                                type="radio"
                                name="payment_option"
                                id="exampleRadios4"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleRadios4"
                                data-bs-toggle="collapse"
                                data-target="#checkPayment"
                                aria-controls="checkPayment"
                              >
                                I am a vendor
                              </label>
                            </div>
                          </div>
                          <div className="login_footer form-group mb-50">
                            <div className="chek-form">
                              <div className="custome-checkbox">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkbox"
                                  id="exampleCheckbox12"
                                  defaultValue=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheckbox12"
                                >
                                  <span>I agree to terms &amp; Policy.</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-30">
                            <button
                              type="submit"
                              className="btn btn-fill-out btn-block hover-up font-weight-bold"
                              name="login"
                            >
                              SIGN UP
                            </button>
                          </div>
                          <p className="font-xs text-muted">
                            <strong>Note:</strong>Your personal data will be
                            used to support your experience throughout this
                            website, to manage access to your account, and for
                            other purposes described in our privacy policy
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <div className="card-login mt-115">
                      <a href="#" className="social-login google-login">
                        <img
                          src="././assets/imgs/theme/icons/logo-google.svg"
                          alt=""
                        />
                        <span>Continue with Google</span>
                      </a>
                      <a href="#" className="social-login facebook-login">
                        <img
                          src="././assets/imgs/theme/icons/logo-facebook.svg"
                          alt=""
                        />
                        <span>Continue with Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
