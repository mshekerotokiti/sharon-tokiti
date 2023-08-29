import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    // You can send the form data to a backend API, for example
  };

  return (
    <div className="contact-container">
      {/* Contact Details Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <h3 className="bi bi-telephone">Phone</h3>
          <p>+254 710 482 080</p>
        </div>
        <div className="contact-card">
          <h3 className="bi bi-envelope">Email</h3>
          <p>
            <a href="mailto:sharontokiti@gmail.com">sharontokiti@gmail.com</a>
          </p>
        </div>
      </div>
      
      {/* Welcome Message */}
      <div className="welcome-message">
        <p>Please feel free to reach out to me for any work or collaboration using the form below.</p>
      </div>
      
      {/* Contact Form */}
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" required />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
      
      {/* Social Media Handles */}
      <div className="social-media-handles">
        <ul className="social-media-list">
          <li>
            <a href="https://www.linkedin.com/sharonmshekero">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </li>
    
          <li>
            <a href="https://www.github.com/yourgithubprofile">
              <i className="bi bi-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/yourtwitterprofile">
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/yourtwitterprofile">
              <i className="bi bi-medium"></i> Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

