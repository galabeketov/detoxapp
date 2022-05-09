import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default function MainHeader() {
  //Hide Loading Box (Preloader)
  // function handlePreloader() {
  //   if ($('.preloader').length) {
  //     $('.preloader').delay(200).fadeOut(500);
  //   }
  // }

  // //Update Header Style and Scroll to Top
  // function headerStyle() {
  //   const mainHead = findDOMNode(this.ref.mainHead);
  //   if ($('.main-header').length) {
  //     var windowpos = $(window).scrollTop();
  //     var siteHeader = $('.main-header');
  //     var scrollLink = $('.scroll-top');
  //     if (windowpos >= 110) {
  //       siteHeader.addClass('fixed-header');
  //       scrollLink.addClass('open');
  //     } else {
  //       siteHeader.removeClass('fixed-header');
  //       scrollLink.removeClass('open');
  //     }
  //   }
  // }

  // headerStyle();

  // //Submenu Dropdown Toggle
  // if ($('.main-header li.dropdown ul').length) {
  //   $('.main-header .navigation li.dropdown').append(
  //     '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>',
  //   );
  // }

  // //Mobile Nav Hide Show
  // if ($('.mobile-menu').length) {
  //   $('.mobile-menu .menu-box').mCustomScrollbar();

  //   var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
  //   $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
  //   $('.sticky-header .main-menu').append(mobileMenuContent);

  //   //Dropdown Button
  //   $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
  //     $(this).toggleClass('open');
  //     $(this).prev('ul').slideToggle(500);
  //   });
  //   //Menu Toggle Btn
  //   $('.mobile-nav-toggler').on('click', function () {
  //     $('body').addClass('mobile-menu-visible');
  //   });

  //   //Menu Toggle Btn
  //   $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on(
  //     'click',
  //     function () {
  //       $('body').removeClass('mobile-menu-visible');
  //     },
  //   );
  // }

  // // Scroll to a Specific Div
  // if ($('.scroll-to-target').length) {
  //   $('.scroll-to-target').on('click', function () {
  //     var target = $(this).attr('data-target');
  //     // animate
  //     $('html, body').animate(
  //       {
  //         scrollTop: $(target).offset().top,
  //       },
  //       1000,
  //     );
  //   });
  // }

  const navigate = useNavigate();
  return (
    <header className="main-header">
      <div className="outer-container">
        <div className="header-upper clearfix">
          <div className="outer-box pull-left">
            <div className="logo-box pull-left">
              <figure className="logo">
                <a href="/">
                  <img src="images/logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area pull-left">
              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="index-3.html">Home</a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/')}>Home Page One</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homepagetwo')}>
                            Home Page Two
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homepagethree')}>
                            Home Page Three
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homeboxed')}>
                            Home Boxed
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homeonepage')}>
                            Home OnePage
                          </a>
                        </li>
                        <li className="dropdown">
                          <a onClick={() => navigate('/homepage')}>Home Page</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/')}>Home Page One</a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/homepagetwo')}>
                                Home Page Two
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/homepagethree')}>
                                Home Page Three
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/service')}>Services</a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/serviceone')}>
                            Services One
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/servicetwo')}>
                            Services Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/pages')}>Pages</a>
                      <ul className="megamenu">
                        <li>
                          <a onClick={() => navigate('/aboutus')}>About Us</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Services One
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Team Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Feature Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Grid
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Services Two
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Counter Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Feature Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Masonry
                          </a>
                        </li>
                        <li>
                          <a href="error.html">Error Page</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Counter Elements 02
                          </a>
                        </li>
                        <li>
                          <a href="about-element-1.html">About Elements 01</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Details
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="about-element-2.html">About Elements 02</a>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="blog-masonry.html">Blog Masonry</a>
                        </li>
                        <li>
                          <a href="service-element.html">Service Elements</a>
                        </li>
                        <li>
                          <a href="process-element-1.html">
                            Process Elements 01
                          </a>
                        </li>
                        <li>
                          <a href="faq.html">Faq's</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="faq-element.html">Faq's Elements</a>
                        </li>
                        <li>
                          <a href="process-element-2.html">
                            Process Elements 02
                          </a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plan</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="choose-element.html">Choose Elements</a>
                        </li>
                        <li>
                          <a href="team-element-1.html">Team Elements 01</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index-3.html">Elements</a>
                      <ul>
                        <li className="dropdown">
                          <a href="index-3.html">Feature Elements</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Feature Elements 01
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Feature Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">About Elements</a>
                          <ul>
                            <li>
                              <a href="about-element-1.html">
                                About Elements 01
                              </a>
                            </li>
                            <li>
                              <a href="about-element-2.html">
                                About Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Blog Elements</a>
                          <ul>
                            <li>
                              <a href="blog-element-1.html">Blog Elements 01</a>
                            </li>
                            <li>
                              <a href="blog-element-2.html">Blog Elements 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Process Elements</a>
                          <ul>
                            <li>
                              <a href="process-element-1.html">
                                Process Elements 01
                              </a>
                            </li>
                            <li>
                              <a href="process-element-2.html">
                                Process Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Counter Elements</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Counter Elements 01
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Counter Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Team Elements</a>
                          <ul>
                            <li>
                              <a href="team-element-1.html">Team Elements 01</a>
                            </li>
                            <li>
                              <a href="team-element-2.html">Team Elements 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="service-element.html">Service Elements</a>
                        </li>
                        <li>
                          <a href="faq-element.html">Faq's Elements</a>
                        </li>
                        <li>
                          <a href="choose-element.html">Choose Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index-3.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-masonry.html">Blog Masonry</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="menu-right-content pull-right">
            <div className="phone">
              Call Us <a href="tel:880762009">+880.762.009</a>
            </div>
            <div className="btn-box">
              <a href="index-3.html">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--sticky Header--> */}
      <div className="sticky-header">
        <div className="container clearfix">
          <figure className="logo-box">
            <a href="index.html">
              <img src="images/small-logo.png" alt="" />
            </a>
          </figure>
          <div className="menu-area">
            <nav className="main-menu clearfix">
              {/* <!--Keep This Empty / Menu will come through Javascript--> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
