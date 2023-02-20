import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
  <div className="preloader-activate preloader-active open_tm_preloader">
    <div className="preloader-area-wrap">
      <div className="spinner d-flex justify-content-center align-items-center h-100">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  </div>
  {/*====================  header area ====================*/}
  <div className="header-area bg-white header-sticky only-mobile-sticky">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header position-relative">
            {/* brand logo */}
            <div className="header__logo">
              <a href="index.html">
                <img
                  src="assets/images/logo/scaled2.png"
                  className="img-fluid"
                  alt=""
                  width={160}
                  height={48}
                />
              </a>
            </div>
            <div className="header-right flexible-image-slider-wrap">
              <div className="header-right-inner" id="hidden-icon-wrapper">
                {/* Header Search Form */}
                <div className="header-search-form d-md-none d-block">
                  <form action="#" className="search-form-top">
                    <input
                      className="search-field"
                      type="text"
                      placeholder="Search…"
                    />
                    <button className="search-submit">
                      <i className="search-btn-icon fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* Header Top Info */}
                <div className="swiper-container header-top-info-slider-werap top-info-slider__container">
                  <div className="swiper-wrapper header-top-info-inner">
                    <div className="swiper-slide">
                      <div className="info-item">
                        <div className="info-icon">
                          <span className="fa fa-phone" />
                        </div>
                        <div className="info-content">
                          <h6 className="info-title">+254 728272483</h6>
                          <div className="info-sub-title">
                            support@tothemoonexperts.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="info-item">
                        <div className="info-icon">
                          <span className="fa fa-map-marker-alt" />
                        </div>
                        <div className="info-content">
                          <h6 className="info-title">
                            219 Amara Fort Apt. 394
                          </h6>
                          <div className="info-sub-title">New York, NY 941</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="info-item">
                        <div className="info-icon">
                          <span className="fa fa-clock" />
                        </div>
                        <div className="info-content">
                          <h6 className="info-title">8:00AM - 8:00AM</h6>
                          <div className="info-sub-title">Monday to Sunday</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="info-item">
                        <div className="info-icon">
                          <span className="fa fa-comment-alt-lines" />
                        </div>
                        <div className="info-content">
                          <h6 className="info-title">Online 24/7</h6>
                          <div className="info-sub-title">+254 726071810</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Header Social Networks */}
                <div className="header-social-networks style-icons">
                  <div className="inner">
                    <a
                      className=" social-link hint--bounce hint--bottom-left"
                      aria-label="Twitter"
                      href="https://twitter.com"
                      data-hover="Twitter"
                      target="_blank"
                    >
                      <i className="social-icon fab fa-twitter" />
                    </a>
                    <a
                      className=" social-link hint--bounce hint--bottom-left"
                      aria-label="Facebook"
                      href="https://facebook.com"
                      data-hover="Facebook"
                      target="_blank"
                    >
                      <i className="social-icon fab fa-facebook-f" />
                    </a>
                    <a
                      className=" social-link hint--bounce hint--bottom-left"
                      aria-label="Instagram"
                      href="https://instagram.com"
                      data-hover="Instagram"
                      target="_blank"
                    >
                      <i className="social-icon fab fa-instagram" />
                    </a>
                    <a
                      className=" social-link hint--bounce hint--bottom-left"
                      aria-label="Linkedin"
                      href="https://linkedin.com"
                      data-hover="Linkedin"
                      target="_blank"
                    >
                      <i className="social-icon fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* mobile menu */}
              <div
                className="mobile-navigation-icon d-block d-xl-none"
                id="mobile-menu-trigger"
              >
                <i />
              </div>
              {/* hidden icons menu */}
              <div
                className="hidden-icons-menu d-block d-md-none"
                id="hidden-icon-trigger"
              >
                <a href="javascript:void(0)">
                  <i className="far fa-ellipsis-h-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom-wrap border-top d-md-block d-none header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-bottom-inner">
              <div className="header-bottom-left-wrap">
                {/* navigation menu */}
                <div className="header__navigation d-none d-xl-block">
                  <nav className="navigation-menu">
                    <ul>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>Our Services</span>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="it-services.html">
                              <span>Academic Writing</span>
                            </a>
                          </li>
                          <li>
                            <a href="managed-it-service.html">
                              <span>Programming Assignment</span>
                            </a>
                          </li>
                          <li>
                            <a href="industries.html">
                              <span>Calculation Assignments</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#">
                          <span>Sample Papers</span>
                        </a>
                        {/* multilevel submenu */}
                        <ul className="submenu">
                          <li>
                            <a href="#">
                              <span>Business Plan</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Dissertations</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Paper Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Research Paper</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Power Point</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Mathematics</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Web Development</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Databases</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="blog-list-large-image.html">
                          <span>How to Order</span>
                        </a>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="blog-list-large-image.html">
                          <span>Latest Reviews</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*====================  End of header area  ====================*/}
  <div id="main-wrapper">
    <div className="site-wrapper-reveal">
      <div className="bg-white">
        {/*============ Cybersecurity Hero Start ============*/}
        <div className="processing-hero processing-hero-bg ">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/*baseline*/}
              <div className="col-lg-6 col-md-7">
                <div className="cybersecurity-hero-text wow move-up">
                  <h1
                    className="font-weight--reguler mb-15"
                    style={{ color: "whitesmoke" }}
                  >
                    We Provide Only The{" "}
                    <span className="text-color-secondary"> Best Services</span>
                  </h1>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "light",
                      color: "whitesmoke"
                    }}
                  >
                    Our company is designed to deliver only the best work.{" "}
                    <span className="text-color-primary">We only hire</span>{" "}
                    &amp;{" "}
                    <span className="text-color-primary">
                      the top notch experts.{" "}
                    </span>{" "}
                    Hiring a professional expert will provide you with qualified
                    and unique paper assistance.
                  </p>
                  <div className="hero-button mt-30">
                    <a href="#" className="btn btn--secondary">
                      Place Order{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="cybersecurity-hero-images-wrap wow move-up">
                  <div className="cybersecurity-hero-images section-space--mt_80">
                    <div className="inner-img-one">
                      <img
                        className="img-fluid worldRotate"
                        src="assets/images/hero/mitech-slider-cybersecurity-global-image.webp"
                        alt=""
                      />
                    </div>
                    <div className="inner-img-two">
                      <img
                        className="img-fluid  ml-5 "
                        src="assets/images/hero/home-reputable-success.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===========  feature-images-wrapper  Start =============*/}
        <div className="feature-images-wrapper position-relative">
          <div className="grid-wrapper">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="swiper-container service-slider__container">
            <div className="swiper-wrapper service-slider__wrapper feature-images__three">
              <div className="swiper-slide">
                {/* ht-box-icon Start */}
                <a href="#" className="ht-box-images style-03 wow move-up">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <img
                        className="img-fulid"
                        src="assets/images/icons/mitech-processing-service-image-01-80x83.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="heading">Unique Essays </h5>
                      <div className="text">
                        When you hire someone to write a paper, you want the
                        completed text to meet the originality demands of your
                        institution. With our essay writing service, you can
                        rest assured that your papers are 100% unique.
                      </div>
                    </div>
                  </div>
                </a>
                {/* ht-box-icon End */}
              </div>
              <div className="swiper-slide">
                {/* ht-box-icon Start */}
                <a href="#" className="ht-box-images style-03 wow move-up">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <img
                        className="img-fulid"
                        src="assets/images/icons/mitech-processing-service-image-02-80x83.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="heading">
                        Around-the-clock customer support
                      </h5>
                      <div className="text">
                        Feel free to contact us at any time to say “write my
                        essays for me” or ask your questions. The friendly
                        customer support team of our essay service is here 24/7
                        to give you a helping hand.
                      </div>
                    </div>
                  </div>
                </a>
                {/* ht-box-icon End */}
              </div>
              <div className="swiper-slide">
                {/* ht-box-icon Start */}
                <a href="#" className="ht-box-images style-03 wow move-up">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <img
                        className="img-fulid"
                        src="assets/images/icons/mitech-processing-service-image-03-80x83.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="heading">Guaranted Anonymity</h5>
                      <div className="text">
                        When you hire a paper writer and pay for essay at
                        EssayPro, your data remains confidential, so no one will
                        ever find out that you’ve been here.
                      </div>
                    </div>
                  </div>
                </a>
                {/* ht-box-icon End */}
              </div>
              <div className="swiper-slide">
                {/* ht-box-icon Start */}
                <a href="#" className="ht-box-images style-03 wow move-up">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <img
                        className="img-fulid"
                        src="assets/images/icons/mitech-processing-service-image-04-80x83.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="heading">Limitless Amendments</h5>
                      <div className="text">
                        After completing the order, our essay writers will be
                        happy to revise it as many times as needed to make it
                        flawless. Thus, when you pay for essay writing with us,
                        you can expect excellent quality.
                      </div>
                    </div>
                  </div>
                </a>
                {/* ht-box-icon End */}
              </div>
              <div className="swiper-slide">
                {/* ht-box-icon Start */}
                <a href="#" className="ht-box-images style-03 wow move-up">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <img
                        className="img-fulid"
                        src="assets/images/icons/mitech-processing-service-image-05-80x83.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="heading">
                        Around-the-clock customer support
                      </h5>
                      <div className="text">
                        Feel free to contact us at any time to say “write my
                        essays for me” or ask your questions. The friendly
                        customer support team of our essay service is here 24/7
                        to give you a helping hand.
                      </div>
                    </div>
                  </div>
                </a>
                {/* ht-box-icon End */}
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-service section-space--mt_30" />
          </div>
        </div>
        {/*===========  feature-images-wrapper  End =============*/}
        {/*============ Infotechno Hero End ============*/}
        {/*====================  Accordion area ====================*/}
        <div className="accordion-wrapper section-space--ptb_100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="faq-wrapper faq-custom-col">
                  <div className="section-title section-space--mb_40">
                    <h2 className="section-sub-title mb-20">About Us</h2>
                    <h3 className="heading">
                      The ultimate{" "}
                      <span className="text-color-primary"> accolade</span>{" "}
                      across all fields.
                    </h3>
                  </div>
                  <div id="accordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Who we are{" "}
                            <span>
                              {" "}
                              <i className="fas fa-chevron-down" />
                              <i className="fas fa-chevron-up" />{" "}
                            </span>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Our Company is a platform for professional writing
                            and development which links skilled experts with
                            anyone who requires a top-notch outcome inside an
                            affordable price range.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button
                            className="btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Our Mission
                            <span>
                              {" "}
                              <i className="fas fa-chevron-down" />
                              <i className="fas fa-chevron-up" />{" "}
                            </span>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            We have come a long way in our mission to provide
                            economic possibilities so that people might live
                            better lives. As a result, we have evolved into the
                            global work marketplace where companies of all sizes
                            and freelancers from all over the world join
                            together daily to do amazing things.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Why choose us{" "}
                            <span>
                              {" "}
                              <i className="fas fa-chevron-down" />
                              <i className="fas fa-chevron-up" />{" "}
                            </span>
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            We carefully handpick all our paper writers to
                            ensure that each of them demonstrates the highest
                            level of professionalism, expertise, and dedication.
                            Such an approach allows us to deliver top-notch
                            papers for everyone who turns to us with "write my
                            essays" request.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rv-video-section">
                  <div className="ht-banner-01 ">
                    <img
                      className="img-fluid border-radus-5 animation_images one wow fadeInDown"
                      src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-02.webp"
                      alt=""
                    />
                  </div>
                  <div className="ht-banner-02">
                    <img
                      className="img-fluid border-radus-5 animation_images two wow fadeInDown"
                      src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-03.webp"
                      alt=""
                    />
                  </div>
                  <div className="main-video-box video-popup">
                    <a
                      href="https://www.youtube.com/watch?v=9No-FiEInLA"
                      className="video-link  mt-30"
                    >
                      <div className="single-popup-wrap">
                        <img
                          className="img-fluid border-radus-5"
                          src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-01.webp"
                          alt=""
                        />
                        <div className="ht-popup-video video-button">
                          <div className="video-mark">
                            <div className="wave-pulse wave-pulse-1" />
                            <div className="wave-pulse wave-pulse-2" />
                          </div>
                          <div className="video-button__two">
                            <div className="video-play">
                              <span className="video-play-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ht-banner-03">
                    <img
                      className="img-fluid border-radus-5 animation_images three wow fadeInDown"
                      src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-04.webp"
                      alt=""
                    />
                  </div>
                  <div className="ht-banner-04">
                    <img
                      className="img-fluid border-radus-5 animation_images four wow fadeInDown"
                      src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-05.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  Accordion area  end ====================*/}
        {/*===========  Feature Images Wrapper Start =============*/}
        <div className="feature-images-wrapper bg-gradient section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title-wrap Start */}
                <div className="section-title-wrap text-center section-space--mb_60">
                  <h2 className="heading">
                    Some of the sevices our company <br />{" "}
                    <span className="text-color-primary"> offers include </span>
                  </h2>
                </div>
                {/* section-title-wrap Start */}
              </div>
            </div>
            <div className="image-l-r-box">
              <div className="row">
                <div className="col image-box-area">
                  <div className="row image-box-boder-box">
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-01-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">Creative Writing </h6>
                            <div className="text">
                              Autobiography, flash fiction, Novel, play, poetry,
                              screenplay and short stories...
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-02-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">Research Papers</h6>
                            <div className="text">
                              Analytical, compare and constrast, interpretative,
                              Survey research paper, and exploratory research
                              paper.
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-03-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">Paper Reviews</h6>
                            <div className="text">
                              Get a term paper in any format including IEEE.
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-04-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">Mathematic Assignments</h6>
                            <div className="text">
                              Algebra, trigonometry, matrix, geometry, calculus,
                              rate &amp; proportion, percentages...
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-05-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">
                              Chemistry, Engineering and Statistics
                            </h6>
                            <div className="text">
                              Thermo-chemistry, electrochemistry, periodic
                              table, chemical bonding, organic, inorganic
                              chemistry...
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6 image-box-boder">
                      {/* ht-box-icon Start */}
                      <div className="ht-box-images style-09">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              src="assets/images/icons/mitech-processing-service-image-06-100x104.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h6 className="heading">
                              Software Development, Databases &amp; and Data
                              Analysis
                            </h6>
                            <div className="text">
                              HTML, Javascript, CSS, Python, PHP, RUBY, C#,
                              JAVA, C++, MYSQL, SQL, ORACLE, Postgresql,
                              MongoDB, EER diagrams
                            </div>
                            <div className="more-arrow-link"></div>
                          </div>
                        </div>
                      </div>
                      {/* ht-box-icon End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="talk-message-box-wrapper section-space--mt_80 small-mt__60">
              <div className="row">
                <div className="col-lg-12">
                  <div className="talk-message-box ">
                    <div className="message-icon">
                      <i className="far fa-comment-alt-dots" />
                    </div>
                    <div className="talk-message-box-content ">
                      <h6 className="heading">
                        Cheers to the work that comes from trusted service
                        providers in time.
                      </h6>
                      <a href="#" className="ht-btn ht-btn-sm">
                        Let's talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===========  Feature Images Wrapper End =============*/}
        {/*==================== Claim To Excel Area Start ====================*/}
        <div className="claim-to-excel-area section-space--ptb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section-title-wrap Start */}
                <div className="section-title-wrap text-center section-space--mb_60">
                  <h2 className="heading">How Our Company Works.</h2>
                </div>
                {/* section-title-wrap Start */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="claim-grid-group">
                  <div className="ht-box-icon style-04">
                    <div className="icon-box-wrap color-one">
                      <div className="icon">
                        <span className="icon-basic-anticlockwise" />
                      </div>
                      <div className="content">
                        <h6 className="sub-heading">01</h6>
                        <h5 className="heading">Placing an Order</h5>
                        <p className="text">
                          Fill out the order form. Provide any extra details
                          regarding the work to provide more clarity. Provide
                          any necesary attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ht-box-icon style-04">
                    <div className="icon-box-wrap color-two">
                      <div className="icon">
                        <span className="icon-basic-life-buoy" />
                      </div>
                      <div className="content">
                        <h6 className="sub-heading">02</h6>
                        <h5 className="heading">Account</h5>
                        <p className="text">
                          All our customers have an account. An existing
                          customer will be redirected to the dashboard after
                          placing ane order. A new customer will be redirected
                          to the registration page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ht-box-icon style-04">
                    <div className="icon-box-wrap color-three">
                      <div className="icon">
                        <span className="icon-basic-world" />
                      </div>
                      <div className="content">
                        <h6 className="sub-heading">03</h6>
                        <h5 className="heading">Payment</h5>
                        <p className="text">
                          Choose your preferred mode of payment. Making a
                          payments provides a guarantee to our team that the
                          client is serious. It also helps us match the work
                          with the best expert.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ht-box-icon style-04">
                    <div className="icon-box-wrap color-four">
                      <div className="icon">
                        <span className="icon-basic-case" />
                      </div>
                      <div className="content">
                        <h6 className="sub-heading">04</h6>
                        <h5 className="heading">Expert Selection</h5>
                        <p className="text">
                          Our team matches the work with the best experts on
                          that area. Selection of an expert depends on the
                          clients service selection including extra services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ht-box-icon style-04">
                    <div className="icon-box-wrap color-five">
                      <div className="icon">
                        <span className="icon-basic-lock" />
                      </div>
                      <div className="content">
                        <h6 className="sub-heading">05</h6>
                        <h5 className="heading">Tracking Order Progress</h5>
                        <p className="text">
                          After placing an order, the order will appear on the
                          dashboard. The only thing remaining is you to wait for
                          order delivery. You can also ask about the order
                          progress by sending a message to the support team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row--10">
              <div className="col-lg-8">
                <div className="success-stories-wrap mt-40">
                  <div className="modern-number-01 me-5">
                    <h2 className="heading">
                      <span className="mark-text">5</span>
                    </h2>
                    <p>YEARS IN THE FIELD</p>
                  </div>
                  <div className="content">
                    <h4 className="heading mb-20">
                      Contact Us <br /> and learn more
                      <br /> about how to order
                    </h4>
                    <a href="#" className="ht-btn ht-btn-md">
                      <i className="far fa-comment-alt-dots me-2" /> Let's talk
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="modern-it-newsletters-wrap text-center mt-40">
                  <div className="section-title">
                    <h6 className="heading mb-30">
                      Don’t miss our monthly newsletters with the best analyses.
                    </h6>
                  </div>
                  <form action="#">
                    <div className="contact-inner">
                      <input
                        name="con_email"
                        type="email"
                        placeholder="Your e-mail"
                      />
                    </div>
                    <div className="button-wrap mb-15">
                      <a href="#" className="ht-btn ht-btn-md ht-btn-full">
                        Subscribe
                      </a>
                    </div>
                    <p>Join 89.898 subscribers.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==================== Claim To Excel Area End ====================*/}
        {/* ==================== OUR TECNOLOGY START ==================== */}
        <div className="technology-service-area technology-service-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title section-space--pt_60">
                  <p className="text-white font-weight--bold">Our Services</p>
                  <h3 className="text-white">
                    <span className="text-color-secondary">
                      tothemoonexperts
                    </span>{" "}
                    – Top Academic Writing Company in the world.
                  </h3>
                  <p className="text-infos text-white mt-30">
                    Feel free to contact us at any time to say “write my essays
                    for me” or ask your questions. The friendly customer support
                    team of our essay service is here 24/7 to give you a helping
                    hand.
                  </p>
                  <div className="single-button-group">
                    <div className="button-group-wrap mt-30">
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        Paper Review
                      </a>
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        Research Paper
                      </a>
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        IEEE Paper
                      </a>
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        Programming
                      </a>
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        Creative Writing
                      </a>
                      <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                        Power Point
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-image section-space--pt_60">
                  <img
                    src="assets/images/banners/soft-s5-img.webp"
                    className="img-fluid"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============ Team Member Wrapper Start =============== */}
        <div className="team-member-wrapper section-space--pt_100 section-space--pb_40">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title section-space--mb_60">
                  <h3 className="heading">
                    Our <span className="text-color-primary">experience </span>{" "}
                    experts
                  </h3>
                  <p className="text mt-30">
                    Meet some of the most talented members of our team.{" "}
                  </p>
                  <div className="sider-title-button-box mt-30">
                    <a href="#" className="ht-btn ht-btn-md">
                      Join us now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 ht-team-member-style-one">
                <div className="row">
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img
                            className="img-fluid"
                            src="assets/images/team/team-member-01-370x250.webp"
                            alt=""
                          />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Dollie Horton </h5>
                          <div className="position">Technical writer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img
                            className="img-fluid"
                            src="assets/images/team/team-member-07-370x250.webp"
                            alt=""
                          />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Stephen Mearsley </h5>
                          <div className="position">Java expert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img
                            className="img-fluid"
                            src="assets/images/team/team-member-04-370x250.webp"
                            alt=""
                          />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Maggie Strickland </h5>
                          <div className="position">Expert Researcher</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img
                            className="img-fluid"
                            src="assets/images/team/team-member-02-370x250.webp"
                            alt=""
                          />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                target="_blank"
                                href="#"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Joyce A.</h5>
                          <div className="position">Quality Management</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============ Team Member Wrapper End =============== */}
        {/* ===================== OUR TECHNOLOGY END ================ */}
        {/*====================  testimonial section ====================*/}
        <div className="testimonial-slider-area bg-gray section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">Testimonials</h6>
                  <h3 className="heading">
                    What do people praise about{" "}
                    <span className="text-color-primary">
                      {" "}
                      tothemoonexperts
                    </span>
                  </h3>
                </div>
                <div className="testimonial-slider">
                  <div className="swiper-container testimonial-slider__container">
                    <div className="swiper-wrapper testimonial-slider__wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src="assets/images/testimonial/mitech-testimonial-avata-02-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="author-info">
                                <h6 className="name">Abbie Ferguson</h6>
                                <span className="designation">
                                  Research Paper
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-slider__text">
                            We only made a couple of revisions and my paper was
                            ready to go. You can pay for essay writing with
                            peace of mind on this website.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src="assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="author-info">
                                <h6 className="name">Monica Blews</h6>
                                <span className="designation">Coursework</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-slider__text">
                            The writer was very responsive, knowledgeable, and
                            helpful. I am glad that I used this paper writer
                            service!
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src="assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="author-info">
                                <h6 className="name">Ammanda D</h6>
                                <span className="designation">Essay</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-slider__text">
                            {" "}
                            I was looking for someone who would write my essay
                            for me. The writer I chose responded quickly and the
                            essay was well written.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src="assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="author-info">
                                <h6 className="name">Paul .S</h6>
                                <span className="designation">Term Paper</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-slider__text">
                            I worked with different paper writers, but her
                            writing is top-notch. Not super talkative, but the
                            material she delivered was excellent.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial section  ====================*/}
        {/*============ Contact Us Area Start =================*/}
        <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="image">
                  <img
                    className="img-fluid"
                    src="assets/images/banners/home-cybersecurity-contact-bg-image.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 ms-auto">
                <div className="contact-info style-two text-left">
                  <div className="contact-info-title-wrap text-center">
                    <h3 className="heading  mb-10">4.9/5.0</h3>
                    <div className="ht-star-rating lg-style">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <p className="sub-text">
                      by 700+ customers for 3200+ clients
                    </p>
                  </div>
                  <div className="contact-list-item">
                    <a href="tel:190068668" className="single-contact-list">
                      <div className="content-wrap">
                        <div className="content">
                          <div className="icon">
                            <span className="fal fa-phone" />
                          </div>
                          <div className="main-content">
                            <h6 className="heading">Call us for quotation</h6>
                            <p className="sub-text">+254728272483</p>
                            <p className="sub-text">+254726071810</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="mailto:hello@mitech.com"
                      className="single-contact-list"
                    >
                      <div className="content-wrap">
                        <div className="content">
                          <div className="icon">
                            <span className="fal fa-envelope" />
                          </div>
                          <div className="main-content">
                            <h6 className="heading">Say hello</h6>
                            <p className="sub-text">
                              support@tothemoonexperts.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============ Contact Us Area End =================*/}
      </div>
    </div>
    {/*====================  footer area ====================*/}
    <div className="footer-area-wrapper reveal-footer bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
              <div className="footer-widget__logo mb-30">
                <img
                  src="assets/images/logo/scaled2.png"
                  className="img-fluid"
                  alt=""
                  width={160}
                  height={48}
                />
              </div>
              <ul className="footer-widget__list">
                <li>58 Howard Street #2 San Francisco, CA 941</li>
                <li>
                  <a
                    href="mailto:contact@aeroland.com"
                    className="hover-style-link"
                  >
                    support@tothemoonexperts.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:123344556"
                    className="hover-style-link text-black font-weight--bold"
                  >
                    +254 728272483
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.klaustechs.com/"
                    className="hover-style-link text-color-primary"
                    target="_blank"
                  >
                    https://www.klaustechs.com/
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">IT Services</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Our team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Sample Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    How to Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Latest Review
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Quick links</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link">
                    Pick up locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Terms of Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Where to Find Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Support</h6>
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="hover-style-link">
                    Forum Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Help &amp; FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Pricing and plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-style-link">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <div className="footer-widget__title section-space--mb_50" />
              <ul className="footer-widget__list">
                <li>
                  <a href="#" className="image_btn">
                    <img
                      className="img-fluid"
                      src="assets/images/icons/aeroland-button-google-play.webp"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="image_btn">
                    <img
                      className="img-fluid"
                      src="assets/images/icons/aeroland-button-app-store.webp"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="copyright-text">
                © 2023 tothemoonexperts.{" "}
                <a href="https://hasthemes.com/">All Rights Reserved.</a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list ht-social-networks solid-rounded-icon">
                <li className="item">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    aria-label="Twitter"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-twitter link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-facebook-f link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    aria-label="Instagram"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-instagram link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    aria-label="Linkedin"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-linkedin link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====================  End of footer area  ====================*/}
  </div>
  {/*====================  scroll top ====================*/}
  <a href="#" className="scroll-top" id="scroll-top">
    <i className="arrow-top fal fa-long-arrow-up" />
    <i className="arrow-bottom fal fa-long-arrow-up" />
  </a>
  {/*====================  End of scroll top  ====================*/}
  {/* End Toolbar */}
  {/*====================  mobile menu overlay ====================*/}
  <div className="mobile-menu-overlay" id="mobile-menu-overlay">
    <div className="mobile-menu-overlay__inner">
      <div className="mobile-menu-overlay__header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-8">
              {/* logo */}
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo/scaled2.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-4">
              {/* mobile menu content */}
              <div className="mobile-menu-content text-end">
                <span
                  className="mobile-navigation-close-icon"
                  id="mobile-menu-close-trigger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay__body">
        <nav className="offcanvas-navigation">
          <ul>
            <li className="has-children">
              <a href="index.html">Home</a>
            </li>
            <li className="has-children">
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="it-services.html">
                <span>Academic Writing</span>
              </a>
            </li>
            <li>
              <a href="managed-it-service.html">
                <span>Programming Assignment</span>
              </a>
            </li>
            <li>
              <a href="industries.html">
                <span>Calculation Assignments</span>
              </a>
            </li>
            <li className="has-children">
              <a href="#">Sample Papers</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span>Business Plan</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Dissertations</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Paper Reviews</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Research Paper</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Power Point</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Mathematics</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Web Development</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Databases</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="javascript:void(0)">How to Order</a>
            </li>
            <li className="has-children">
              <a href="javascript:void(0)">Latest Reviews</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/*====================  End of mobile menu overlay  ====================*/}
  {/*====================  search overlay ====================*/}
  <div className="search-overlay" id="search-overlay">
    <div className="search-overlay__header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 ms-auto col-4">
            {/* search content */}
            <div className="search-content text-end">
              <span
                className="mobile-navigation-close-icon"
                id="search-close-trigger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="search-overlay__inner">
      <div className="search-overlay__body">
        <div className="search-overlay__form">
          <form action="#">
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*====================  End of search overlay  ====================*/}
</>
  
  );
}

export default App;
