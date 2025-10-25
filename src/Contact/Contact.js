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
          <div className="contact-email" title='hlhartley@gmail.com'><i class="fas fa-envelope"></i></div>
          <div><i class="fab fa-linkedin" title="heatherleehartley"></i> <a href="https://www.linkedin.com/in/heatherleehartley/" target="_blank" className="link"></a></div>
          <div><i class="fab fa-github" title="hlhartley"></i> <a href="https://github.com/hlhartley" target="_blank" className="link"></a></div>
        </div>
    </div>
		);
	}
}

export default Contact;