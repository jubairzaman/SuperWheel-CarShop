import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Order.css";
import useAuth from "../../../hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { _id, name, price, img } = vehicle;
  useEffect(() => {
    fetch(`https://super-wheel-server.vercel.app/vehicles/${vehicleId}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data));
  }, []);
  const onSubmit = (data) => {
    axios.post("https://super-wheel-server.vercel.app/order", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div>
        <div className="mb-3 py-3 text-center">
          <h2>
            Order for <span className="text-danger text-uppercase">{name}</span>
          </h2>
          <img className="w-25" src={img} alt="" />
        </div>
        <div className="order-form container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="me-2 fw-bold">Your Email:</label> <br />
            <input
              type="email"
              value={user.email}
              {...register("email", { required: true })}
            />{" "}
            <br />
            <label className="me-2 fw-bold">Your Name:</label> <br />
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Your Name"
              value={user?.displayName}
            />{" "}
            <br />
            <label className="me-2 fw-bold">Your Number:</label> <br />
            <input
              type="number"
              {...register("number", { required: true, maxLength: 20 })}
              placeholder="Your Number"
            />{" "}
            <br />
            <label className="me-2 fw-bold">Tell us About you:</label> <br />
            <textarea
              {...register("description")}
              placeholder="Tell Us About you"
            />{" "}
            <br />
            <label className="me-2 fw-bold">Tour Cost: $</label> <br />
            <textarea
              cols="30"
              rows="1"
              type="text"
              {...register("price")}
              placeholder="price"
              value={price}
            />{" "}
            <br />
            <label className="me-2 fw-bold">Your Photo URL:</label> <br />
            <input
              {...register("img")}
              type="url"
              placeholder="image url"
            />{" "}
            <br />
            <div className='default-data'>
            <input {...register("vehicleImg")} type="url" value={img} /> <br />
            <input {...register("vehicleName")} type="name" value={name} />{" "}
            </div>
            <br />
            <input
              type="submit"
              value="Confirm Your Order"
              className="border bg-warning p-1 fw-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
