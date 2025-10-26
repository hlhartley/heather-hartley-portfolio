import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Banner />
        <Projects />
      </div>
    );
  }
}

export default Home;
