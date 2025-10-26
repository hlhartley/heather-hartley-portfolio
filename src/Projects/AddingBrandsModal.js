import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class AddingBrandsModal extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="feature-product-container">
        <div className="feature-project-title">
          <div>
            <span className="feature-project-number">02</span> Adding Brands Modal
          </div>
          <Link to="/home">
            <button className="arrow-button"><i className="fas fa-home"></i></button>
          </Link>
        </div>
        <div className='line-spacer'></div>
        <div className='line-spacer'></div>
        <div className='feature-product-description'>
          <div className='feature-product-info-section'>
              <div className="feature-project-text">
              <div>I designed and developed a multi-step modal to streamline the process of adding new brands, replicating existing settings, and onboarding users. The feature included six steps with optional paths, handling over 60 mockups and interactive prototypes, and was completed end-to-end in five weeks.</div>
            </div>
            <div className='info-row'>
              <div className='info-label'>Target Audience</div>
              <div>
                <ul>
                  <li>Marketing agencies and social media managers managing multiple brands.</li>
                  <li>Needed a fast and error-free way to add brands and replicate settings.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Purpose</div>
              <div>
                <ul>
                  <li>Previously, adding new brands was complex and time-consuming.</li>
                  <li>Copying settings, schedules, categories, and inviting users required many manual steps.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Role</div>
              <ul>
                <li>Designed and built the entire feature, from mockups to front-end implementation.</li>
                <li>Created 60+ Figma mockups and interactive prototypes.</li>
                <li>Built modular, maintainable front-end components handling multiple options, inputs, and toggles.</li>
                <li>Iterated on designs based on stakeholder feedback via Figma comments.</li>
                <li>Implemented optional skip functionality across 6-step workflow.</li>
              </ul>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Constraints</div>
              <div>
                <ul>
                  <li>5-week timeline.</li>
                  <li>Multiple optional steps with intricate interactions.</li>
                  <li>Needed usability and flexibility without increasing errors.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Process</div>
              <div>
                <ol>
                  <li>Mapped the 6-step workflow with optional paths.</li>
                  <li>Designed high-fidelity mockups and prototypes in Figma.</li>
                  <li>Iterated based on leadership and stakeholder feedback.</li>
                  <li>Built front-end components for conditional flows, inputs, and toggles.</li>
                  <li>Conducted QA and usability testing before launch.</li>
                </ol>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Result</div>
              <ul>
                <li>Delivered fully functional modal in 5 weeks.</li>
                <li>Simplified onboarding and setup for new brands.</li>
                <li>Reduced time and errors, improving user efficiency and satisfaction.</li>
              </ul>
            </div>
          </div>
            <div className='feature-project-screenshot'>
            <img className="feature-project-img" src={require("../assets/AddingBrandsModalWhiteBg.png")} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddingBrandsModal;