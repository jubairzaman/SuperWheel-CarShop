import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex">
              <h2 className="fw-bold">
                <span className="text-white me-5">Super <span className="text-danger">Wheels</span></span>
              </h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/vehicles" className="nav-link">
                  Shop
                </Link>
                <Link to="/reviews" className="nav-link">
                  Reviews
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>

              </div>
              <div className='navbar-nav ms-auto'>
                {user?.email ? (
                  <Link to="/dashboard" className="nav-link dashboard">
                    Dashboard
                  </Link>
                ) : (
                  ""
                )}
                {user?.email ? (
                  <p className="text-center pt-2 me-2 text-white">
                    {user.displayName}
                  </p>
                ) : (
                  ""
                )}
                {user?.email ? (
                  <Link to="/login">
                    <button
                      onClick={logOut}
                      className="btn btn-danger me-2 fw-bold"
                    >
                      Log-out
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-warning me-2 fw-bold">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
