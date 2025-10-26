import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class WhiteLabelLandingPage extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="feature-product-container">
        <div className="feature-project-title">
          <div>
            <span className="feature-project-number">03</span> White Label Landing Page
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
              <div>I created an interactive white label landing page feature that allowed users to visualize their branded platform, including dashboard, login, and analytics previews. I completed the entire end-to-end feature in under 2 weeks.</div>
            </div>
            <div className='info-row'>
              <div className='info-label'>Target Audience</div>
              <div>
                <ul>
                  <li>Marketing agencies and social media managers exploring how a white-labeled platform would look for their brand.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Purpose</div>
              <div>
                <ul>
                  <li>Users needed a way to see and customize their branded platform before adoption, including colors, logos, and UI previews, to better understand the product and drive engagement.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Role</div>
              <ul>
                <li>Designed mockups and interactive previews for dashboard, login, and analytics.</li>
                <li>Collected and incorporated feedback from both internal and external stakeholders.</li>
                <li>Built the frontend feature, ensuring real-time customization and accurate previews.</li>
                <li>Iterated quickly on feedback to refine UI and interactions.</li>
              </ul>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Constraints</div>
              <div>
                <ul>
                  <li>Tight 2-week timeline.</li>
                  <li>Needed dynamic preview functionality that accurately reflected user customizations.</li>
                  <li>Stakeholder input required rapid iteration while maintaining code quality.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Process</div>
              <div>
                <ol>
                  <li>Designed mockups, as displayed on the right</li>
                  <li>Gathered feedback from stakeholders and refined designs in real time.</li>
                  <li>Implemented frontend logic for live color, logo, and component previews.</li>
                </ol>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Result</div>
              <ul>
                <li>Delivered fully functional white label landing page in less than 2 weeks.</li>
                <li>Enabled users to explore branding options and visualize the product before committing.</li>
                <li>Supported marketing goals by integrating the feature on the company homepage.</li>
              </ul>
            </div>
          </div>
            <div className='feature-project-screenshot'>
            <img className="feature-project-img" src={require("../assets/WhiteLabelLandingPage1.png")} />
            <img className="feature-project-img" src={require("../assets/WhiteLabelLandingPage3.png")} />
            <img className="feature-project-img" src={require("../assets/WhiteLabelLandingPage2.png")} />
          </div>
        </div>
      </div>
    );
  }
}

export default WhiteLabelLandingPage;