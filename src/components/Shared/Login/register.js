import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {
    signUpUser,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    error,
    user,
  } = useAuth();

  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={signUpUser} className="col-md-12 shadow p-5">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              onBlur={handleNameChange}
              type="text"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              required
            />
          </div>
          <h5 className="text-danger mt-2">{user.email ? "" : `${error}`}</h5>
          <div className="from-group mt-5">
            <input className='bg-success text-white border-0 rounded px-3 py-1 fw-bold' type="submit" value="Register" />
            <br />
            <br />
            <Link className="fw-bold" to="/login">
              Already Register?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;