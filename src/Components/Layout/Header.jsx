import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="header-area header-style-1 header-style-5 header-height-2">
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only
            <strong>3 days</strong> left
          </span>
        </div>
        {/* <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <a href="page-account.html">Help and Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="text-center">
                  <div id="news-flash" className="d-inline-block">
                    <ul>
                      <li>
                        100% Secure delivery without contacting the courier
                      </li>
                      <li>Supper Value Deals - Save more with coupons</li>
                      <li>Trendy 25silver jewelry, save up 35% off today</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      Need help? Call Us:
                      <strong className="text-brand"> + 0300 - 920</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link to="/">
                  <img src="././././assets/imgs/theme/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active">
                      <option>All Categories</option>
                      <option>Milks and Dairies</option>
                      <option>Wines &amp; Alcohol</option>
                      <option>Clothing &amp; Beauty</option>
                      <option>Pet Foods &amp; Toy</option>
                      <option>Fast food</option>
                      <option>Baking material</option>
                      <option>Vegetables</option>
                      <option>Fresh Seafood</option>
                      <option>Noodles &amp; Rice</option>
                      <option>Ice cream</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <a href="/login/login.html">
                        <img
                          className="svgInject"
                          alt="MallSayLo"
                          src="././assets/imgs/theme/icons/icon-user.svg"
                        />
                      </a>
                      <a href="/login/login.html">
                        <span className="lable ml-0 pr-5">Login </span> |
                      </a>
                      <a href="/register/Register.html">
                        <span className="lable ml-0 pl-5"> Sing Up</span>
                      </a>
                    </div>
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon" href="/cart/shop-cart.html">
                        <img
                          alt="MallSayLo"
                          src="././assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count blue">2</span>
                      </a>
                      <a href="/cart/shop-cart.html">
                        <span className="lable">Cart</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <a href="/shopProduct/shop-product-right.html">
                                <img
                                  alt="MallSayLo"
                                  src="././assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="/shopProduct/shop-product-right.html">
                                  Daisy Casual Bag
                                </a>
                              </h4>
                              <h4>
                                <span>1 × </span>Rs.800.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <a href="/shopProduct/shop-product-right.html">
                                <img
                                  alt="MallSayLo"
                                  src="././assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="/shopProduct/shop-product-right.html">
                                  Corduroy Shirts
                                </a>
                              </h4>
                              <h4>
                                <span>1 × </span>Rs.3200.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>Rs.4000.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <a href="/cart/shop-cart.html" className="outline">
                              View cart
                            </a>
                            <a href="/checkout/shop-checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <a href="/home/index.html">
                  <img src="././assets/imgs/theme/logo.png" alt="logo" />
                </a>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a className="categories-button-active" href="#">
                    <span className="fi-rs-apps" />
                    <span className="et">Trending</span> Categories
                    <i className="fi-rs-angle-down" />
                  </a>
                  <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-1.svg"
                              alt=""
                            />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-2.svg"
                              alt=""
                            />
                            Clothing &amp; beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-3.svg"
                              alt=""
                            />
                            Pet Foods &amp; Toy
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-4.svg"
                              alt=""
                            />
                            Baking material
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-5.svg"
                              alt=""
                            />
                            Fresh Fruit
                          </a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-6.svg"
                              alt=""
                            />
                            Wines &amp; Drinks
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-7.svg"
                              alt=""
                            />
                            Fresh Seafood
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-8.svg"
                              alt=""
                            />
                            Fast food
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-9.svg"
                              alt=""
                            />
                            Vegetables
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            <img
                              src="././assets/imgs/theme/icons/category-10.svg"
                              alt=""
                            />
                            Bread and Juice
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="././assets/imgs/theme/icons/icon-1.svg"
                                alt=""
                              />
                              Milks and Dairies
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="././assets/imgs/theme/icons/icon-2.svg"
                                alt=""
                              />
                              Clothing &amp; beauty
                            </a>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="././assets/imgs/theme/icons/icon-3.svg"
                                alt=""
                              />
                              Wines &amp; Drinks
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              <img
                                src="././assets/imgs/theme/icons/icon-4.svg"
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
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img
                          src="././assets/imgs/theme/icons/icon-hot-white.svg"
                          alt="hot deals"
                        />
                        <a href="shop-grid-right.html">Deals</a>
                      </li>
                      <li>
                        <a className="active" href="/home/index.html">
                          Home{" "}
                        </a>
                      </li>
                      <li>
                        <a href="/about/about.html">About</a>
                      </li>
                      <li>
                        <a href="/contact/contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="././assets/imgs/theme/icons/icon-headphone-white.svg"
                  alt="hotline"
                />
                <p>
                  0300 - 920<span>24/7 Support Center</span>
                </p>
              </div>
              <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        alt="MallSayLo"
                        src="././assets/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count white">4</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="#">
                      <img
                        alt="MallSayLo"
                        src="././assets/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count white">2</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="/shopProduct/shop-product-right.html">
                              <img
                                alt="MallSayLo"
                                src="././assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="/shopProduct/shop-product-right.html">
                                Plain Striola Shirts
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>Rs.800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="/shopProduct/shop-product-right.html">
                              <img
                                alt="MallSayLo"
                                src="././assets/imgs/shop/thumbnail-4.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="/shopProduct/shop-product-right.html">
                                Macbook Pro 2022
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>Rs.3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small" />
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>Rs.383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <a href="shop-cart.html">View cart</a>
                          <a href="shop-checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <a href="/home/index.html">
                <img src="/home/././assets/imgs/theme/logo.png" alt="logo" />
              </a>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style search-close">
                <i className="icon-top" />
                <i className="icon-bottom" />
              </button>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit">
                  <i className="fi-rs-search" />
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading">
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-header-info-wrap">
              <div className="single-mobile-header-info">
                <a href="page-contact.html">
                  <i className="fi-rs-marker" /> Our location
                </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="page-login.html">
                  <i className="fi-rs-user" />
                  Log In / Sign Up
                </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="#">
                  <i className="fi-rs-headphones" />
                  (+01) - 2345 - 6789
                </a>
              </div>
            </div>
            <div className="mobile-social-icon mb-50">
              <h6 className="mb-15">Follow Us</h6>
              <a href="#">
                <img
                  src="././assets/imgs/theme/icons/icon-facebook-white.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="././assets/imgs/theme/icons/icon-twitter-white.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="././assets/imgs/theme/icons/icon-instagram-white.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="././assets/imgs/theme/icons/icon-pinterest-white.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="././assets/imgs/theme/icons/icon-youtube-white.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="site-copyright">
              Copyright 2024 © MallSayLo. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
