import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get('/hostels');
      setHostels(response.data.slice(0, 3)); // Show only 3 hostels on home
    } catch (error) {
      console.error('Error fetching hostels:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="hero-title">Find Your Perfect Hostel Stay</h1>
          <p className="hero-subtitle">
            Book comfortable and affordable hostel accommodation with our easy-to-use booking system.
            Perfect for students and travelers.
          </p>
          <div className="mt-4">
            <Link to="/hostels" className="btn btn-light btn-lg me-3">
              <i className="fas fa-search me-2"></i>
              Browse Hostels
            </Link>
            <Link to="/register" className="btn btn-outline-light btn-lg">
              <i className="fas fa-user-plus me-2"></i>
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Hostels */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Hostels</h2>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="hostel-grid">
              {hostels.map(hostel => (
                <div key={hostel._id} className="card fade-in">
                  <div 
                    className="card-img-top"
                    style={{
                      height: '200px',
                      backgroundColor: '#4CAF50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <i className="fas fa-building fa-4x"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{hostel.name}</h5>
                    <p className="card-text text-muted">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {hostel.location}
                    </p>
                    <p className="card-text">
                      {hostel.description.length > 100 
                        ? `${hostel.description.substring(0, 100)}...` 
                        : hostel.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 text-primary">From ₹1200/bed</span>
                      <Link to={`/hostels/${hostel._id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-5">
            <Link to="/hostels" className="btn btn-outline-primary btn-lg">
              View All Hostels <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose HostelBook?</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-shield-alt fa-3x text-primary"></i>
                </div>
                <h4>Secure Booking</h4>
                <p className="text-muted">Safe and secure online booking with instant confirmation.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-search fa-3x text-primary"></i>
                </div>
                <h4>Easy Search</h4>
                <p className="text-muted">Find hostels by location, price, and amenities.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-headset fa-3x text-primary"></i>
                </div>
                <h4>24/7 Support</h4>
                <p className="text-muted">Round-the-clock customer support for all your needs.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-wallet fa-3x text-primary"></i>
                </div>
                <h4>Best Prices</h4>
                <p className="text-muted">Get the best deals and discounts on hostel bookings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;