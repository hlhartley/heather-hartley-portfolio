import React, { Component } from 'react';
import '../main.scss';
import { Link } from "react-router-dom";

class AddingBrandsModal extends Component {
    constructor () {
        super()
      }

  render() {
    return (
      <div className="adding-brands-modal-container">
        <Link className="nav-link" to="/home">
          <button className="arrow-button">←</button>
        </Link>
        Adding Brands Modal
      </div>
    );
  }
}

export default AddingBrandsModal;