import React from 'react';

const About: React.FC = () => {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        <strong>Electrician Co.</strong> has been providing top-quality electrical services for over 10 years. 
        Our mission is to ensure safety, reliability, and satisfaction with every project. We offer a range of 
        residential and commercial services that are tailored to meet the unique needs of each client.
      </p>

      <div className="about-container">
        <div className="about-text">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Highly trained and certified electricians</li>
            <li>Commitment to customer satisfaction</li>
            <li>Affordable and transparent pricing</li>
            <li>Emergency services available 24/7</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/500" alt="Electrician at work" />
        </div>
      </div>
    </section>
  );
}

export default About;
