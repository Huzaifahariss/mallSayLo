import React from "react";

export default function contact() {
  return (
    <div>
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="/home/index.html" rel="nofollow">
                <i className="fi-rs-home mr-5" />
                Home
              </a>
              <span> Contact </span>
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="row align-items-end mb-50">
                  <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                    <h4 className="mb-20 text-brand">How can help you ?</h4>
                    <h1 className="mb-30">Let us know how we can help you ?</h1>
                    <p className="mb-20">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <h5 className="mb-20">01. Visit Feedback</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h5 className="mb-20">02. Employer Services</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                      <div className="col-lg-6 mb-lg-0 mb-4">
                        <h5 className="mb-20 ">03. Billing Inquiries</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <h5 className="mb-20">04.General Inquiries</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="mb-50">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="contact-from-area padding-20-row-col">
                        <h5 className="text-brand mb-10">Contact form</h5>
                        <h2 className="mb-10">
                          Are You Confused ?{" "}
                          <span className="text-brand mb-10">
                            {" "}
                            Connect With Us{" "}
                          </span>
                        </h2>
                        <p className="text-muted mb-30 font-sm">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <form
                          className="contact-form-style mt-30"
                          id="contact-form"
                          action="#"
                          method="post"
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="name"
                                  placeholder="First Name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="email"
                                  placeholder="Your Email"
                                  type="email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="telephone"
                                  placeholder="Your Phone"
                                  type="tel"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="subject"
                                  placeholder="Subject"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="textarea-style mb-30">
                                <textarea
                                  name="message"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                              <button
                                className="submit submit-auto-width"
                                type="submit"
                              >
                                Send message
                              </button>
                            </div>
                          </div>
                        </form>
                        <p className="form-messege" />
                      </div>
                    </div>
                    <div className="col-lg-4 pl-50 d-lg-block d-none">
                      <img
                        className="border-radius-15 mt-50"
                        src="assets/imgs/page/contact-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
