import React, { useEffect, useState } from "react";
import Dashboard from "../../Admin/dashboard/Dashboard";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      fetch("http://localhost:5000/order")
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/order/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount === 1) {
          const remaining = orders.filter((order) => order._id !== id);
          alert("Order deleted successfully");
          setOrders(remaining);
        }
      });
  };

  return (
    <div className="container text-uppercase">
        <Dashboard />
      <h1 className="text-center py-3">
        Your Ordered <span className="text-danger fw-bold ">Vehicles</span>
      </h1>

      <div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Vehicle</th>
          <th scope="col">Model</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Number</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
          <th scope="col">Manage</th>
          

        </tr>
      </thead>
      {orders.map((order) => (
          <tbody>
          <tr className='fw-bold'>
          <td><img src={order.vehicleImg} className='w-25' alt="" /></td>
            <td>{order.vehicleName}</td>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.number}</td>
            <td>{order.createdAt}</td>
            <td className='text-warning'>Pending</td>
            <td ><button className='bg-danger border-0' onClick={()=>{handleDelete(order._id)}}>Delete</button></td>
          </tr>
        </tbody>
        ))}
    </table>
        
      </div>
    </div>
  );
};

export default MyOrders;