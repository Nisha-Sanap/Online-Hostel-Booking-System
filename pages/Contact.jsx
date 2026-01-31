import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Contact Information</h4>
              
              <div className="mb-4">
                <h5>
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Address
                </h5>
                <p className="mb-0">123 Hostel Street</p>
                <p className="mb-0">City, State 12345</p>
                <p>Country</p>
              </div>
              
              <div className="mb-4">
                <h5>
                  <i className="fas fa-phone text-primary me-2"></i>
                  Phone
                </h5>
                <p className="mb-0">+1 (234) 567-890</p>
                <p>+1 (234) 567-891</p>
              </div>
              
              <div className="mb-4">
                <h5>
                  <i className="fas fa-envelope text-primary me-2"></i>
                  Email
                </h5>
                <p className="mb-0">support@hostelbook.com</p>
                <p>bookings@hostelbook.com</p>
              </div>
              
              <div>
                <h5>
                  <i className="fas fa-clock text-primary me-2"></i>
                  Working Hours
                </h5>
                <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;