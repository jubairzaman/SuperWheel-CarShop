import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";
  const {
    googleSignIn,
    saveUser,
    signInUser,
    user,
    error,
    handleEmailChange,
    handlePasswordChange,
    setError,
    setUser,
  } = useAuth();
  return (
    <div className=" container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={signInUser} className="col-md-12 shadow p-5">
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
            <input
              className="bg-warning border-0 rounded px-3 py-1 fw-bold"
              type="submit"
              value="Login"
            />
          </div>
          <div className="from-group mt-5">
            <button
              onClick={() => {
                googleSignIn()
                  .then((result) => {
                    const user = result.user;
                    setUser(user);
                    saveUser(user.email, user.displayName, 'POST');
                    history.push(redirect);
                    setError("");
                  })
                  .catch((err) => {
                    const errorMessage = err.message;
                    setError(errorMessage);
                  });
              }}
              className="btn fw-bold btn-warning"
            >
              Google Sign in
            </button>
            <br />
            <br />
            <Link className="fw-bold" to="/register">
              Are you new user?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
