import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../dashboard/Dashboard";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://super-wheel-server.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        'authorization': `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          
        if (data.modifiedCount) {
          alert("New Admin added successfully");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
        <Dashboard />
        <div className='container text-center mt-3'>
      <h2 >Make an <span className='text-danger'>Admin</span></h2>
      <form onSubmit={handleAdminSubmit} className='my-3'>
        <label className="me-2 fw-bold">Add Email:</label> <br />
        <input type="email" placeholder='enter the email' onBlur={handleOnBlur} />
        <button type="submit" className='bg-info border-0 ms-3 fw-bold'>
          Assign New Admin
        </button>
      </form>
    </div>
    </div>
  );
};

export default MakeAdmin;
