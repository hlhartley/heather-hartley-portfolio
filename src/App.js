import React, { Component } from 'react';
import './main.scss';
import Home from './Home/Home';
import MobileDashboard from './Projects/MobileDashboard';
import AddingBrandsModal from './Projects/AddingBrandsModal';
import WhiteLabelLandingPage from './Projects/WhiteLabelLandingPage';
import { Routes, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navFixed: false,
      initialNavPosition: 0,
    }
  }

  render() {
    return (
        <div className="App" id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/mobile-dashboard' element={< MobileDashboard />}></Route>
          <Route exact path='/adding-brands-modal' element={< AddingBrandsModal />}></Route>
          <Route exact path='/white-label-landing-page' element={< WhiteLabelLandingPage />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
        </div>
    );
  }
}

export default App;
