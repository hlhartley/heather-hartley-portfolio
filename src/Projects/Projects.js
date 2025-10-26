import React, { Component } from 'react';
import '../Projects/Projects.scss';
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div className="projects-container">
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">01</span> Mobile Dashboard</div>
              <img className="project-img" src={require("../assets/MobileDashboardMockups.png")} />
              <Link className="nav-link" to="/mobile-dashboard">
                <button className="arrow-button">→</button>
              </Link>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">02</span> Adding Brands Modal</div>
              <img className="project-img" src={require("../assets/AddingBrandsModalMockups.png")} />
              <Link className="nav-link" to="/adding-brands-modal">
                <button className="arrow-button">→</button>
              </Link>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">03</span> White Label Landing Page</div>
              <img className="project-img" src={require("../assets/WhiteLabelLandingPage1.png")} />
              <Link className="nav-link" to="/white-label-landing-page">
                <button className="arrow-button">→</button>
              </Link>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <a href="https://github.com/hlhartley/blackjack" target="_blank">
                <div className="project-title"><span className="project-number">04</span> Blackjack Game</div>
                <img className="project-img" src={require("../assets/blackjack_desktop.png")} />
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">05</span> Beauty Shop Webpage</div>
              <img className="project-img" src={require("../assets/The_Greeda_Homepage_desktop.png")} />
              <a href="https://github.com/hlhartley/the-greeda" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">06</span> Word Guessing Game</div>
              <img className="project-img" src={require("../assets/word-war-1.png")} />
              <a href="https://github.com/hlhartley/hlhartley-word-war-1" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project">
            <div>
              <div className="project-title"><span className="project-number">07</span> Note Tracker App</div>
              <img className="project-img" src={require("../assets/listy-ss.png")} />
              <a href="https://github.com/hlhartley/listy" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">08</span> Terminal Command Game</div>
              <img className="project-img" src={require("../assets/terminal-commander.png")} />
              <a href="https://github.com/hlhartley/terminal-commander" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">09</span> Harvard Art Carousel</div>
              <img className="project-img" src={require("../assets/harvard-art-project.png")} />
              <a href="https://github.com/hlhartley/harvard-art-project" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">10</span> Movie Tracker App</div>
              <img className="project-img" src={require("../assets/movie-tracker.png")} />
              <a href="https://github.com/hlhartley/movie-tracker-app" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">11</span> Hexcode Suggestion App</div>
              <img className="project-img" src={require("../assets/palit.png")} />
              <a href="https://github.com/hlhartley/palette-picker" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">12</span> Makeup Palette App</div>
              <img className="project-img" src={require("../assets/seasonal-shades.png")} />
              <a href="https://github.com/hlhartley/seasonal-shades" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">13</span> Starwars Info App</div>
              <img className="project-img" src={require("../assets/swapi-box.png")} />
              <a href="https://github.com/hlhartley/swapi-box" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">14</span> Ice Cream Flavors App</div>
              <img className="project-img" src={require("../assets/iscream.png")} />
              <a href="https://github.com/hlhartley/icecream_whateverly" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <div>
              <div className="project-title"><span className="project-number">15</span> Wheel of Fortune Game</div>
              <img className="project-img" src={require("../assets/spin2win.png")} />
              <a href="https://github.com/hlhartley/wheeloffortune" target="_blank">
                <button className="arrow-button">→</button>
              </a>
            </div>
          </div>
          <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
            <img className="project-phone-img" src={require("../assets/picyourlandmarklogin.png")} />
            <img className="project-phone-img" src={require("../assets/picyourlandmark.png")} />
            <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank">
              <button className="arrow-button">→</button>
            </a>
          </div>
        </div>
    )
  }
}

export default Projects;