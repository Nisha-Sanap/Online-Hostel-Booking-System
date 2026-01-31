import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-bed me-2"></i>
          HostelBook
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hostels">Hostels</Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/my-bookings">My Bookings</Link>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            )}
          </ul>
          
          <div className="d-flex">
            {isAuthenticated ? (
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-user me-2"></i>
                  {user?.fullName || user?.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/dashboard">
                      <i className="fas fa-tachometer-alt me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/my-bookings">
                      <i className="fas fa-calendar-check me-2"></i>
                      My Bookings
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light me-2">
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  <i className="fas fa-user-plus me-2"></i>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
