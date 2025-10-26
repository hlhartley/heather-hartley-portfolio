import React, { Component } from 'react';
import '../main.scss';

class Contact extends Component {
    constructor () {
        super()
      }

	render() {
		return (
			<div className="contact-container">
        <div className="contact-info-container">
          <div className="contact-email" title='hlhartley@gmail.com'><i className="fas fa-envelope"></i></div>
          <div><a href="https://www.linkedin.com/in/heatherleehartley/" target="_blank" className="link"><i className="fab fa-linkedin" title="heatherleehartley"></i></a></div>
          <div><a href="https://github.com/hlhartley" target="_blank" className="link"><i className="fab fa-github" title="hlhartley"></i></a></div>
        </div>
    </div>
		);
	}
}

export default Contact;