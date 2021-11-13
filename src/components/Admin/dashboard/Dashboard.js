import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { user, logOut, admin } = useAuth();
  console.log(user);

  return (
    <div className="container my-3 d-flex">

      {user?.email && (
        <div className="d-flex justify-content-center ">
          <Link to="/myorders">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              My Orders
            </button>
          </Link>
          <Link to="/addreview">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              Add Review
            </button>
          </Link>
          <Link to="/pay">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              Payment
            </button>
          </Link>

        </div>
      )}
      {admin && (
        <div>
          <Link to="/addproduct">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              Add Product
            </button>
          </Link>
          <Link to="/allorders">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              All Orders
            </button>
          </Link>
          <Link to="/makeadmin">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              Make Admin
            </button>
          </Link>
          <Link to="/manageproducts">
            <button className="btn btn-primary text-uppercase me-2 fw-bold">
              Manage Products
            </button>
          </Link>
        </div>
      )}
      {user?.email ? (
        <Link to="/login">
          <button onClick={logOut} className="btn btn-danger me-2 fw-bold">
            Log-out
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="btn btn-success me-2 fw-bold">Log In</button>
        </Link>
      )}
    </div>
  );
};

export default Dashboard;
