import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
      const dateToday = () => {
      const today = new Date();
      return(
        <div className='title-text'>
          {`${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}.${String(today.getFullYear()).slice(-2)}`}
        </div>
      )
    }
    return (
      <div>
         <div className="top-banner">
          {dateToday()}
          <div className='line-spacer'></div>
          <div className='line-spacer'></div>
        </div>
        <Banner />
        <Projects />
      </div>
    );
  }
}

export default Home;
