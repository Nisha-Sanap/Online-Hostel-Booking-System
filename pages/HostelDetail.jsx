import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const HostelDetail = () => {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFloor, setSelectedFloor] = useState(null);

  useEffect(() => {
    fetchHostelDetails();
  }, [id]);

  const fetchHostelDetails = async () => {
    try {
      const [hostelResponse, roomsResponse] = await Promise.all([
        axios.get(`/hostels/${id}`),
        axios.get(`/hostels/${id}/rooms`)
      ]);
      
      setHostel(hostelResponse.data);
      setRooms(roomsResponse.data);
      
      // Set default selected floor
      if (roomsResponse.data.length > 0) {
        const floors = [...new Set(roomsResponse.data.map(room => room.floorNumber))];
        setSelectedFloor(floors[0]);
      }
    } catch (error) {
      console.error('Error fetching hostel details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner"></div>
        <p className="mt-3">Loading hostel details...</p>
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="container py-5 text-center">
        <h3>Hostel not found</h3>
        <Link to="/hostels" className="btn btn-primary mt-3">
          Back to Hostels
        </Link>
      </div>
    );
  }

  // Get unique floors
  const floors = [...new Set(rooms.map(room => room.floorNumber))].sort();

  // Filter rooms by selected floor
  const filteredRooms = rooms.filter(room => 
    selectedFloor === null || room.floorNumber === selectedFloor
  );

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/hostels">Hostels</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {hostel.name}
          </li>
        </ol>
      </nav>

      {/* Hostel Header */}
      <div className="row mb-5">
        <div className="col-md-8">
          <h1 className="display-5 fw-bold">{hostel.name}</h1>
          <p className="lead text-muted">
            <i className="fas fa-map-marker-alt me-2"></i>
            {hostel.location}
          </p>
          
          <div className="mb-4">
            <h5>Description</h5>
            <p>{hostel.description}</p>
          </div>

          <div className="mb-4">
            <h5>Amenities</h5>
            <div className="d-flex flex-wrap gap-2">
              {hostel.amenities?.map((amenity, index) => (
                <span key={index} className="badge bg-primary p-2">
                  <i className="fas fa-check me-1"></i>
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-phone me-2"></i>
                  {hostel.contactPhone}
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  {hostel.contactEmail}
                </li>
                <li className="mb-2">
                  <i className="fas fa-building me-2"></i>
                  {rooms.length} Rooms Available
                </li>
              </ul>
              <Link 
                to="#rooms" 
                className="btn btn-primary w-100"
                onClick={() => document.getElementById('rooms').scrollIntoView()}
              >
                <i className="fas fa-bed me-2"></i>
                View Available Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Selection */}
      <div id="rooms" className="mb-4">
        <h3 className="mb-4">Available Rooms</h3>
        
        <div className="mb-4">
          <h5>Select Floor</h5>
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn ${selectedFloor === null ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedFloor(null)}
            >
              All Floors
            </button>
            {floors.map(floor => (
              <button
                key={floor}
                type="button"
                className={`btn ${selectedFloor === floor ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedFloor(floor)}
              >
                Floor {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="row">
          {filteredRooms.length > 0 ? (
            filteredRooms.map(room => (
              <div key={room._id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="card-title mb-1">Room {room.roomNumber}</h5>
                        <p className="text-muted mb-2">
                          Floor {room.floorNumber} • {room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}
                        </p>
                      </div>
                      <span className="badge bg-success">
                        ₹{room.pricePerBed}/bed per night
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="mb-1">
                        <i className="fas fa-bed me-2"></i>
                        Capacity: {room.capacity} beds
                      </p>
                      <p className="mb-1">
                        <i className="fas fa-check-circle me-2"></i>
                        Available Beds: {room.beds.filter(b => b.status === 'available').length}
                      </p>
                    </div>

                    <div className="mb-3">
                      <h6>Bed Status:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {room.beds.map(bed => (
                          <div
                            key={bed.bedNumber}
                            className={`bed-card ${bed.status === 'available' ? 'available' : 'booked'}`}
                            style={{ width: '80px' }}
                          >
                            <div className="bed-status">
                              {bed.status === 'available' ? 'Available' : 'Booked'}
                            </div>
                            <div className="mt-2">
                              <strong>Bed {bed.bedNumber}</strong>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={`/book/${hostel._id}/${room._id}`}
                      className="btn btn-primary w-100"
                      disabled={room.beds.filter(b => b.status === 'available').length === 0}
                    >
                      {room.beds.filter(b => b.status === 'available').length > 0 ? (
                        <>
                          <i className="fas fa-book me-2"></i>
                          Book Now ({room.beds.filter(b => b.status === 'available').length} beds available)
                        </>
                      ) : (
                        'Fully Booked'
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center py-5">
                <i className="fas fa-door-closed fa-3x text-muted mb-3"></i>
                <h4>No rooms available on this floor</h4>
                <p className="text-muted">Try selecting a different floor</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;