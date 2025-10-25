import React, { Component } from 'react';
import '../main.scss';
import Contact from '../Contact/Contact';
class Banner extends Component {
  constructor() {
    super()
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
        <div className='description_container'>
          <div className='profile-container'>
            <div className='name-text'>Heather Hartley</div>
            <small>Frontend Engineer | UI/UX Developer</small>
          </div>
          <div className="about-text">
            <div className='about-text-description'>Over five years of experience building secure, scalable, and high-performance user interfaces with Angular, React, and TypeScript. Experienced in owning customer-facing features, modernizing codebases, and collaborating across teams to deliver solutions to thousands of users.</div>
            <div className='line-spacer'></div>
             <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;

