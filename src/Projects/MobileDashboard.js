import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class MobileDashboard extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="mobile-dashboard-container">
        <Link className="nav-link" to="/home">
          <button className="arrow-button">←</button>
        </Link>
        Mobile Dashboard
      </div>
    );
  }
}

export default MobileDashboard;