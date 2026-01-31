import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">About HostelBook</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Our Mission</h3>
              <p className="card-text">
                HostelBook was founded with a simple mission: to make hostel booking 
                easy, secure, and accessible for everyone. Whether you're a student 
                looking for affordable accommodation or a traveler seeking a community 
                experience, we've got you covered.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Why Choose Us?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Verified and safe hostel listings
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Easy online booking process
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  24/7 customer support
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Best price guarantee
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Instant booking confirmation
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-3">Quick Facts</h4>
              <div className="mb-3">
                <h5>500+</h5>
                <p className="text-muted">Hostels Listed</p>
              </div>
              <div className="mb-3">
                <h5>10,000+</h5>
                <p className="text-muted">Happy Customers</p>
              </div>
              <div className="mb-3">
                <h5>24/7</h5>
                <p className="text-muted">Support Available</p>
              </div>
              <div>
                <h5>50+</h5>
                <p className="text-muted">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
