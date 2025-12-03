import React from "react";
import bannerImage from "./assets/Banner Image.png";
import aboutimg from "./assets/about img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // overrides bootstrap classes
import demo1 from "./assets/demo1.jpeg";
import demo2 from "./assets/demo2.jpeg";
import demo3 from "./assets/demo3.jpeg";
import demo4 from "./assets/demo4.jpeg";
import demo5 from "./assets/demo5.jpeg";
import demo6 from "./assets/demo6.jpeg";

const portfolioImages = [demo1, demo2, demo3, demo4, demo5, demo6];

const skills = [
  { name: "HTML 5", value: 80 },
  { name: "CSS 3", value: 75 },
  { name: "Bootstrap", value: 60 },
  { name: "JavaScript", value: 50 },
  { name: "Adobe Photoshop", value: 75 },
  { name: "Adobe Illustrator", value: 60 },
];

const portfolioItems = [1, 2, 3, 4, 5, 6];

export default function App() {
  return (
    <div className="app-root bg-main text-white">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            RIEAD
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a href="#contact" className="btn btn-gradient btn-sm">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <h2 className="text-white  mb-1">Hi, its me</h2>
              <h1 className="display-5 fw-bold">RIEAD MIA</h1>
              <h2 className="h4 text-accent fw-semibold mb-3">
                And I'm a Frontend Developer
              </h2>
              <p className="text-light-50 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                dolorum ullam molestias autem deleniti iure earum!
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <button className="btn btn-gradient">Download CV</button>
                <div className="d-flex gap-3">
                  <a href="#" className="social-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={bannerImage}
                alt="Frontend developer banner"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-main">
        <div className="container">
          <h2 className="section-title text-center">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="row align-items-center mt-5 gy-4">
            <div className="col-md-4 text-center">
              {/* Replace with your own photo */}
              <img src={aboutimg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h3 className="h4 mb-3">
                Frontend Developer &amp; Graphic Designer
              </h3>
              <p className="text-light-50 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reiciendis, quas voluptatum facere quam iusto itaque sapiente
                dolor provident aspernatur unde, suscipit illum, veniam
                similique animi iste corporis repellendus veritatis minus
                voluptas. Sint, aliquid.
              </p>
              <p className="text-light-50 mb-4">
                Praesentium explicabo facere quod ea earum. Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
              <button className="btn btn-outline-accent">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding bg-alt">
        <div className="container">
          <h2 className="section-title text-center">
            My <span className="text-accent">Services</span>
          </h2>

          <div className="row mt-5 g-4">
            <div className="col-md-4">
              <div className="service-card h-100 text-center p-4">
                <div className="service-icon mb-3">
                  <i className="bi bi-window-sidebar"></i>
                </div>
                <h3 className="h5 mb-3">Web Development</h3>
                <p className="small text-light-50">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card h-100 text-center p-4">
                <div className="service-icon mb-3">
                  <i className="bi bi-phone"></i>
                </div>
                <h3 className="h5 mb-3">Apps Development</h3>
                <p className="small text-light-50">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card h-100 text-center p-4">
                <div className="service-icon mb-3">
                  <i className="bi bi-bar-chart-line"></i>
                </div>
                <h3 className="h5 mb-3">Digital Marketing</h3>
                <p className="small text-light-50">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding bg-main">
        <div className="container">
          <h2 className="section-title text-center">
            My <span className="text-accent">Skills</span>
          </h2>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              {skills.map((skill) => (
                <div className="mb-4" key={skill.name}>
                  <div className="d-flex justify-content-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-accent">{skill.value}%</span>
                  </div>
                  <div className="progress skill-progress">
                    <div
                      className="progress-bar bg-accent"
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section-padding bg-alt">
        <div className="container">
          <h2 className="section-title text-center">Portfolio</h2>

          <div className="row mt-5 g-4">
            {portfolioImages.map((imgSrc, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="portfolio-card">
                  <img
                    src={imgSrc}
                    className="img-fluid rounded"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="portfolio-overlay">
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-main">
        <div className="container">
          <h2 className="section-title text-center">Contact</h2>

          <div className="row mt-5 g-4">
            <div className="col-lg-4">
              <div className="contact-info">
                <p className="mb-2">
                  <i className="bi bi-telephone me-2 text-accent"></i>
                  +8801863-931220
                </p>
                <p className="mb-2">
                  <i className="bi bi-telephone me-2 text-accent"></i>
                  +8801567-953483
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope me-2 text-accent"></i>
                  md.riead.bd@gmail.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-geo-alt me-2 text-accent"></i>
                  Zirabo, Ashulia, Savar, Dhaka
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form-control-dark"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-dark"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-dark"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form-control-dark"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="4"
                      className="form-control form-control-dark"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-gradient px-5">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-nav text-center py-3">
        <small className="text-light-50">
          Copywrite &amp; Copy © 2023 | All Rights Reserved by RIEAD
        </small>
      </footer>
    </div>
  );
}
