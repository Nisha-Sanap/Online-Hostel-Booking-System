import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hostels = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get('/hostels');
      setHostels(response.data);
    } catch (error) {
      console.error('Error fetching hostels:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredHostels = hostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hostel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-md-8">
          <h1 className="display-5 fw-bold">Available Hostels</h1>
          <p className="lead text-muted">
            Find the perfect hostel for your stay. Browse through our collection of verified hostels.
          </p>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search hostels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner"></div>
          <p className="mt-3">Loading hostels...</p>
        </div>
      ) : (
        <>
          <div className="hostel-grid mb-5">
            {filteredHostels.map(hostel => (
              <div key={hostel._id} className="card">
                <div className="card-img-top" style={{
                  height: '200px',
                  backgroundColor: '#4CAF50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
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
                  
                  <div className="mb-3">
                    <strong>Amenities:</strong>
                    <div className="mt-2">
                      {hostel.amenities?.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="badge bg-light text-dark me-2 mb-2">
                          <i className="fas fa-check me-1"></i>
                          {amenity}
                        </span>
                      ))}
                      {hostel.amenities?.length > 3 && (
                        <span className="badge bg-secondary">
                          +{hostel.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="h5 text-primary">From ₹1200/bed</span>
                      <br />
                      <small className="text-muted">
                        <i className="fas fa-phone me-1"></i>
                        {hostel.contactPhone}
                      </small>
                    </div>
                    <Link to={`/hostels/${hostel._id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHostels.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-building fa-4x text-muted mb-3"></i>
              <h3>No hostels found</h3>
              <p className="text-muted">Try adjusting your search terms</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hostels;