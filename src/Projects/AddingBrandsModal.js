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
        <div className="project-title">
          <div>
            <span className="project-number">02</span> Adding Brands Modal
          </div>
          <Link className="nav-link" to="/home">
            <button className="arrow-button"><i className="fas fa-home"></i></button>
          </Link>
        </div>
        <div className='line-spacer'></div>
        <div className='mobile-dashboard-description'>
          <div className='info-section'>
            <div className='info-row'>
              <div className='info-label'>Audience</div>
              <div>Text</div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Purpose/Problem</div>
              <div>Text</div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Role</div>
              <div>Text</div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Constraints</div>
              <div>Text</div>
            </div>
            <div className='line-spacer'></div>
            <div className='info-row'>
              <div className='info-label'>Result</div>
              <div>Text</div>
            </div>
            <div className="project-text">
            <div>Test text goes here. Test text goes here. Test text goes here. Test text goes here. Test text goes here. Test text goes here.Test text goes here.Test text goes here.Test text goes here.vTest text goes here. Test text goes here. Test text goes here. Test text goes here.</div>
          </div>
          </div>
          <div className='project-screenshot'>
            <img className="project-img" src={require("../assets/AllAddingBrandModalMockups.png")} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddingBrandsModal;