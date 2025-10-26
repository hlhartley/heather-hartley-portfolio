import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class WhiteLabelLandingPage extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="white-label-landing-page-container">
        <Link className="nav-link" to="/home">
          <button className="arrow-button">←</button>
        </Link>
       White Label Landing Page
      </div>
    );
  }
}

export default WhiteLabelLandingPage;