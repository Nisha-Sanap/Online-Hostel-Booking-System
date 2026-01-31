import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold mb-3">
              <i className="fas fa-bed me-2"></i>
              HostelBook
            </h4>
            <p className="text-light">
              Your trusted partner for comfortable and affordable hostel accommodations.
              We connect students and travelers with the best hostel stays across the country.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  <i className="fas fa-home me-2"></i> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/hostels" className="text-light text-decoration-none">
                  <i className="fas fa-building me-2"></i> Hostels
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  <i className="fas fa-info-circle me-2"></i> About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">
                  <i className="fas fa-envelope me-2"></i> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-bed me-2"></i> Hostel Booking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-calendar-check me-2"></i> Room Management
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-headset me-2"></i> 24/7 Support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-shield-alt me-2"></i> Secure Payments
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                <span className="text-light">
                  123 Hostel Street, City, State 12345
                </span>
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+1234567890" className="text-light text-decoration-none">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:support@hostelbook.com" className="text-light text-decoration-none">
                  support@hostelbook.com
                </a>
              </li>
              <li>
                <i className="fas fa-clock me-2"></i>
                <span className="text-light">24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-light" />

        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              &copy; {currentYear} Hostel Management System. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <Link to="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="/terms" className="text-light text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/sitemap" className="text-light text-decoration-none">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;