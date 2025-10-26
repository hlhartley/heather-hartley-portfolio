import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class MobileDashboard extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="feature-product-container">
        <div className="feature-project-title">
          <div>
            <span className="feature-project-number">01</span> Mobile Dashboard
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
              <div>I led the design and development of a mobile dashboard for a marketing automation platform, aimed at helping agency clients manage campaigns on the go. The goal was to translate the functionality of the desktop platform into a streamlined, mobile experience focused on speed, clarity, and essential workflows.</div>
            </div>
            <div className='info-row'>
              <div className='info-label'>Target Audience</div>
              <div>
                <ul>
                  <li>Marketing agencies and social media managers managing multiple brands.</li>
                  <li>Needed mobile access to performance metrics, post scheduling, and communication.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Purpose</div>
              <div>
                <ul>
                  <li>Extend desktop functionality to mobile for on-the-go updates.</li>
                  <li>Defined MVP by analyzing usage data and client feedback.</li>
                  <li>Prioritized four key pages: dashboard, post creation, upcoming posts, and inbox.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Role</div>
              <ul>
                <li>Defined the MVP scope using data insights and user feedback to focus on the most valuable features.</li>
                <li>Designed 30+ mockups and prototypes, iterating based on leadership and stakeholder reviews.</li>
                <li>Broke development into modular components to ensure consistent UI patterns and maintainable code.</li>
                <li>Implemented the full frontend experience, collaborating with product and backend teams for integration.</li>
                <li>Oversaw the end-to-end delivery, ensuring design accuracy and a cohesive user experience across all screens.</li>
              </ul>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Constraints</div>
              <div>
                <ul>
                  <li>Six-month timeline from kickoff to launch.</li>
                  <li>Needed to balance stakeholder requests with MVP scope.</li>
                  <li>Limited resources, requiring efficient iteration and prioritization.</li>
                </ul>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Process</div>
              <div>
                <ol>
                  <li>Discovery: Used analytics and client insights to define MVP scope.</li>
                  <li>Design: Created and refined mockups and prototypes.</li>
                  <li>Iteration: Incorporated leadership feedback and adapted to design changes midstream.</li>
                  <li>Development: Broke work into phases and tracked sprints for efficiency.</li>
                  <li>Testing & launch: Conducted QA and usability reviews before rollout.</li>
                </ol>
              </div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Result</div>
              <ul>
                <li>Delivered a functional, intuitive mobile dashboard within six months.</li>
                <li>Provided clients real-time access to key data and workflows on mobile.</li>
                <li>Improved user satisfaction and engagement across mobile sessions.</li>
              </ul>
            </div>
          </div>
            <div className='feature-project-screenshot'>
            <img className="feature-project-img" src={require("../assets/AllMobileDashboardMockupsWhiteBg.png")} />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileDashboard;