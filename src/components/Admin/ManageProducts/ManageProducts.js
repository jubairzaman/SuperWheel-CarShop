import React, { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import axios from "axios";
import './style.css'

const ManageProducts = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/order/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount === 1) {
          const remaining = vehicles.filter((order) => order._id !== id);
          alert("Order deleted successfully");
          setVehicles(remaining);
        }
      });
  };
  return (
    <div>
      <Dashboard />
      <div className="container">
        <h1 className="text-danger text-center">Manage Products</h1>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Vehicle</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Manage</th>
              </tr>
            </thead>
            {vehicles.map((order) => (
              <tbody>
                <tr className="fw-bold">
                  <td>
                    <img src={order.img} className="width" alt="" />
                  </td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td className="text-warning">Uploaded</td>
                  <td>
                    <button
                      className="bg-danger border-0"
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
