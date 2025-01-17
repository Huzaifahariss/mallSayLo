import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

function Home() {
  return (
    <div>
      <main className="main">
        <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 d-none d-lg-flex">
                <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Milks and Dairies
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-2.svg"
                            alt=""
                          />
                          Clothing &amp; beauty
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-3.svg"
                            alt=""
                          />
                          Pet Foods &amp; Toy
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-4.svg"
                            alt=""
                          />
                          Baking material
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-5.svg"
                            alt=""
                          />
                          Fresh Fruit
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-6.svg"
                            alt=""
                          />
                          Wines &amp; Drinks
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-7.svg"
                            alt=""
                          />
                          Fresh Seafood
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-8.svg"
                            alt=""
                          />
                          Fast food
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-9.svg"
                            alt=""
                          />
                          Vegetables
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-10.svg"
                            alt=""
                          />
                          Bread and Juice
                        </a>
                      </li>
                      <li>
                        <a href="/shop-grid-right">
                          <img
                            src="assets/imgs/theme/icons/category-3.svg"
                            alt=""
                          />
                          Pet Foods &amp; Toy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="more_slide_open" style={{ display: "none" }}>
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="/shop-grid-right">
                            <img
                              src="assets/imgs/theme/icons/icon-1.svg"
                              alt=""
                            />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="/shop-grid-right">
                            <img
                              src="assets/imgs/theme/icons/icon-2.svg"
                              alt=""
                            />
                            Clothing &amp; beauty
                          </a>
                        </li>
                        <li>
                          <a href="/shop-grid-right">
                            <img
                              src="assets/imgs/theme/icons/icon-3.svg"
                              alt=""
                            />
                            Wines &amp; Drinks
                          </a>
                        </li>
                        <li>
                          <a href="/shop-grid-right">
                            <img
                              src="assets/imgs/theme/icons/icon-4.svg"
                              alt=""
                            />
                            Fresh Seafood
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories">
                    <span className="icon" />
                    <span className="heading-sm-1">Show more...</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="home-slide-cover mt-30">
                  <div className="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
                    <div
                      className="single-hero-slider single-animation-wrap"
                      style={{
                        backgroundImage: "url(assets/imgs/slider/slider-7.png)",
                      }}
                    >
                      <div className="slider-content">
                        <h1 className="display-2 mb-40">
                          Don’t miss amazing
                          <br />
                          grocery deals
                        </h1>
                        <p className="mb-65">
                          Sign up for the daily newsletter
                        </p>
                        <form className="form-subcriber d-flex">
                          <input
                            type="email"
                            placeholder="Your emaill address"
                          />
                          <button className="btn" type="submit">
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="slider-arrow hero-slider-1-arrow" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <div className="banner-img style-4 mt-30">
                      <img src="assets/imgs/banner/banner-14.png" alt="" />
                      <div className="banner-text">
                        <h4 className="mb-30">
                          Everyday Fresh &amp; <br />
                          Clean with Our
                          <br />
                          Products
                        </h4>
                        <a className="btn btn-xs mb-50" href="/shop-grid-right">
                          Shop Now <i className="fi-rs-arrow-small-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                    <div className="banner-img style-5 mt-5 mt-md-30">
                      <img src="assets/imgs/banner/banner-15.png" alt="" />
                      <div className="banner-text">
                        <h5 className="mb-20">
                          The best Organic <br />
                          Products Online
                        </h5>
                        <a className="btn btn-xs" href="/shop-grid-right">
                          Shop Now <i className="fi-rs-arrow-small-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End hero slider*/}
        <section className="popular-categories section-padding">
          <div className="container wow animate__animated animate__fadeIn">
            <div className="section-title">
              <div className="title">
                <h3>Featured Categories</h3>
                <ul className="list-inline nav nav-tabs links">
                  <li className="list-inline-item nav-item">
                    <a className="nav-link" href="/shop-grid-right">
                      Cake &amp; Milk
                    </a>
                  </li>
                  <li className="list-inline-item nav-item">
                    <a className="nav-link" href="/shop-grid-right">
                      Coffes &amp; Teas
                    </a>
                  </li>
                  <li className="list-inline-item nav-item">
                    <a className="nav-link active" href="/shop-grid-right">
                      Pet Foods
                    </a>
                  </li>
                  <li className="list-inline-item nav-item">
                    <a className="nav-link" href="/shop-grid-right">
                      Vegetables
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                id="carausel-10-columns-arrows"
              />
            </div>
            <div className="carausel-10-columns-cover position-relative">
              {/* <div className="carausel-10-columns" id="carausel-10-columns">
                <div
                  className="card-2 bg-9 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-13.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Cake &amp; Milk</a>
                  </h6>
                  <span>26 items</span>
                </div>
                <div
                  className="card-2 bg-10 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-12.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Oganic Kiwi</a>
                  </h6>
                  <span>28 items</span>
                </div>
                <div
                  className="card-2 bg-11 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-11.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Peach</a>
                  </h6>
                  <span>14 items</span>
                </div>
                <div
                  className="card-2 bg-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-9.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Red Apple</a>
                  </h6>
                  <span>54 items</span>
                </div>
                <div
                  className="card-2 bg-13 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-3.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Snack</a>
                  </h6>
                  <span>56 items</span>
                </div>
                <div
                  className="card-2 bg-14 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".6s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-1.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Vegetables</a>
                  </h6>
                  <span>72 items</span>
                </div>
                <div
                  className="card-2 bg-15 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".7s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-2.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Strawberry</a>
                  </h6>
                  <span>36 items</span>
                </div>
                <div
                  className="card-2 bg-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".8s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-4.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Black plum</a>
                  </h6>
                  <span>123 items</span>
                </div>
                <div
                  className="card-2 bg-10 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".9s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-5.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Custard apple</a>
                  </h6>
                  <span>34 items</span>
                </div>
                <div
                  className="card-2 bg-12 wow animate__animated animate__fadeInUp"
                  data-wow-delay="1s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-14.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Coffe &amp; Tea</a>
                  </h6>
                  <span>89 items</span>
                </div>
                <div
                  className="card-2 bg-11 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0s"
                >
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="/shop-grid-right">
                      <img src="assets/imgs/shop/cat-15.png" alt="" />
                    </a>
                  </figure>
                  <h6>
                    <a href="/shop-grid-right">Headphone</a>
                  </h6>
                  <span>87 items</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/*End category slider*/}
        <section className="banners mb-25">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="banner-img wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <img src="assets/imgs/banner/banner-1.png" alt="" />
                  <div className="banner-text">
                    <h4>
                      Everyday Fresh &amp; <br />
                      Clean with Our
                      <br />
                      Products
                    </h4>
                    <a className="btn btn-xs" href="/shop-grid-right">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="banner-img wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <img src="assets/imgs/banner/banner-2.png" alt="" />
                  <div className="banner-text">
                    <h4>
                      Make your Breakfast
                      <br />
                      Healthy and Easy
                    </h4>
                    <a className="btn btn-xs" href="/shop-grid-right">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-md-none d-lg-flex">
                <div
                  className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <img src="assets/imgs/banner/banner-3.png" alt="" />
                  <div className="banner-text">
                    <h4>
                      The best Organic <br />
                      Products Online
                    </h4>
                    <a className="btn btn-xs" href="/shop-grid-right">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End banners*/}
        <section className="product-tabs section-padding position-relative">
          <div className="container">
            <div className="section-title style-2 wow animate__animated animate__fadeIn">
              <h3>Popular Products</h3>
              <ul className="nav nav-tabs links" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="nav-tab-one"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-one"
                    type="button"
                    role="tab"
                    aria-controls="tab-one"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-two"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-two"
                    type="button"
                    role="tab"
                    aria-controls="tab-two"
                    aria-selected="false"
                  >
                    Milks &amp; Dairies
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-three"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-three"
                    type="button"
                    role="tab"
                    aria-controls="tab-three"
                    aria-selected="false"
                  >
                    Coffes &amp; Teas
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-four"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-four"
                    type="button"
                    role="tab"
                    aria-controls="tab-four"
                    aria-selected="false"
                  >
                    Pet Foods
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-five"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-five"
                    type="button"
                    role="tab"
                    aria-controls="tab-five"
                    aria-selected="false"
                  >
                    Meats
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-six"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-six"
                    type="button"
                    role="tab"
                    aria-controls="tab-six"
                    aria-selected="false"
                  >
                    Vegetables
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nav-tab-seven"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-seven"
                    type="button"
                    role="tab"
                    aria-controls="tab-seven"
                    aria-selected="false"
                  >
                    Fruits
                  </button>
                </li>
              </ul>
            </div>
            {/*End nav-tabs*/}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tab-one"
                role="tabpanel"
                aria-labelledby="tab-one"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div
                      className="product-cart-wrap wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div
                      className="product-cart-wrap wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab one*/}
              <div
                className="tab-pane fade"
                id="tab-two"
                role="tabpanel"
                aria-labelledby="tab-two"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-16-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-16-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab two*/}
              <div
                className="tab-pane fade"
                id="tab-three"
                role="tabpanel"
                aria-labelledby="tab-three"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab three*/}
              <div
                className="tab-pane fade"
                id="tab-four"
                role="tabpanel"
                aria-labelledby="tab-four"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab four*/}
              <div
                className="tab-pane fade"
                id="tab-five"
                role="tabpanel"
                aria-labelledby="tab-five"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-16-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-16-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab five*/}
              <div
                className="tab-pane fade"
                id="tab-six"
                role="tabpanel"
                aria-labelledby="tab-six"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*En tab six*/}
              <div
                className="tab-pane fade"
                id="tab-seven"
                role="tabpanel"
                aria-labelledby="tab-seven"
              >
                <div className="row product-grid-4">
                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.28.85</span>
                            <span className="old-price">Rs.32.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Stouffer</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.52.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "85%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">StarKist</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.48.85</span>
                            <span className="old-price">Rs.52.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Vegetables</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.17.85</span>
                            <span className="old-price">Rs.19.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap mb-30">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">-14%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Pet Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Blue Diamond Almonds Lightly Salted Vegetables
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-16-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-16-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Hodo Foods</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.54.85</span>
                            <span className="old-price">Rs.55.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Meats</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.32.85</span>
                            <span className="old-price">Rs.33.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Snack</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Encore Seafoods Stuffed Alaskan Salmon
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">NestFood</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.35.85</span>
                            <span className="old-price">Rs.37.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-9-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-9-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Coffes</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Gorton’s Beer Battered Fish Fillets with soft paper
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.23.85</span>
                            <span className="old-price">Rs.25.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                    <div className="product-cart-wrap">
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="/shop-product-right">
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                          <a
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="/shop-grid-right">Cream</a>
                        </div>
                        <h2>
                          <a href="/shop-product-right">
                            Haagen-Dazs Caramel Cone Ice Cream Ketchup
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "50%" }}
                            />
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (2.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="/vendor-details-1">Tyson</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>Rs.22.85</span>
                            <span className="old-price">Rs.24.8</span>
                          </div>
                          <div className="add-cart">
                            <a className="add" href="/shop-cart">
                              <i className="fi-rs-shopping-cart mr-5" />
                              Add
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="banner-img style-6 wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <img src="assets/imgs/banner/banner-16.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">
                      Everyday Fresh with
                      <br />
                      Our Products
                    </h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="banner-img style-6 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <img src="assets/imgs/banner/banner-17.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">
                      100% guaranteed all
                      <br />
                      Fresh items
                    </h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="banner-img style-6 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <img src="assets/imgs/banner/banner-18.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">
                      Special grocery sale
                      <br />
                      off this month
                    </h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="banner-img style-6 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <img src="assets/imgs/banner/banner-19.png" alt="" />
                  <div className="banner-text">
                    <h6 className="mb-10 mt-30">
                      Enjoy 15% OFF for all
                      <br />
                      vegetable and fruit
                    </h6>
                    <p>Go to supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pb-5">
          <div className="container">
            <div
              className="section-title wow animate__animated animate__fadeIn"
              data-wow-delay={0}
            >
              <h3 className="">Deals Of The Day</h3>
              <a className="show-all" href="/shop-grid-right">
                All Deals
                <i className="fi-rs-angle-right" />
              </a>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/banner/banner-5.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="deals-countdown-wrap">
                      <div
                        className="deals-countdown"
                        data-countdown="2025/03/25 00:00:00"
                      />
                    </div>
                    <div className="deals-content">
                      <h2>
                        <a href="/shop-product-right">
                          Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                        </a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="/vendor-details-1">NestFood</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>Rs.32.85</span>
                          <span className="old-price">Rs.33.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="/shop-cart">
                            <i className="fi-rs-shopping-cart mr-5" />
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/banner/banner-6.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="deals-countdown-wrap">
                      <div
                        className="deals-countdown"
                        data-countdown="2026/04/25 00:00:00"
                      />
                    </div>
                    <div className="deals-content">
                      <h2>
                        <a href="/shop-product-right">
                          Perdue Simply Smart Organics Gluten Free
                        </a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="/vendor-details-1">Old El Paso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>Rs.24.85</span>
                          <span className="old-price">Rs.26.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="/shop-cart">
                            <i className="fi-rs-shopping-cart mr-5" />
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                <div
                  className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/banner/banner-7.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="deals-countdown-wrap">
                      <div
                        className="deals-countdown"
                        data-countdown="2027/03/25 00:00:00"
                      />
                    </div>
                    <div className="deals-content">
                      <h2>
                        <a href="/shop-product-right">
                          Signature Wood-Fired Mushroom and Caramelized
                        </a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "80%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (3.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="/vendor-details-1">Progresso</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>Rs.12.85</span>
                          <span className="old-price">Rs.13.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="/shop-cart">
                            <i className="fi-rs-shopping-cart mr-5" />
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                <div
                  className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="product-img-action-wrap">
                    <div className="product-img">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/banner/banner-8.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="deals-countdown-wrap">
                      <div
                        className="deals-countdown"
                        data-countdown="2025/02/25 00:00:00"
                      />
                    </div>
                    <div className="deals-content">
                      <h2>
                        <a href="/shop-product-right">
                          Simply Lemonade with Raspberry Juice
                        </a>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "80%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (3.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <a href="/vendor-details-1">Yoplait</a>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>Rs.15.85</span>
                          <span className="old-price">Rs.16.8</span>
                        </div>
                        <div className="add-cart">
                          <a className="add" href="/shop-cart">
                            <i className="fi-rs-shopping-cart mr-5" />
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Deals*/}
        <section className="section-padding mb-30">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-delay={0}
              >
                <h4 className="section-title style-1 mb-30 animated animated">
                  Top Selling
                </h4>
                <div className="product-list-small animated animated">
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Nestle Original Coffee-Mate Coffee Creamer
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-2.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Nestle Original Coffee-Mate Coffee Creamer
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Nestle Original Coffee-Mate Coffee Creamer
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className="section-title style-1 mb-30 animated animated">
                  Trending Products
                </h4>
                <div className="product-list-small animated animated">
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-4.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Organic Cage-Free Grade A Large Brown Eggs
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-5.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-6.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="section-title style-1 mb-30 animated animated">
                  Recently added
                </h4>
                <div className="product-list-small animated animated">
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-7.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Pepperidge Farm Farmhouse Hearty White Bread
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-8.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Organic Frozen Triple Berry Blend
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-9.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Oroweat Country Buttermilk Bread
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="section-title style-1 mb-30 animated animated">
                  Top Rated
                </h4>
                <div className="product-list-small animated animated">
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-10.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Foster Farms Takeout Crispy Classic Buffalo Wings
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-11.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                  <article className="row align-items-center hover-up">
                    <figure className="col-md-4 mb-0">
                      <a href="/shop-product-right">
                        <img src="assets/imgs/shop/thumbnail-12.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="col-md-8 mb-0">
                      <h6>
                        <a href="/shop-product-right">
                          All Natural Italian-Style Chicken Meatballs
                        </a>
                      </h6>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div className="product-price">
                        <span>Rs.32.85</span>
                        <span className="old-price">Rs.33.8</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End 4 columns*/}
      </main>
    </div>
  );
}

export default Home;
