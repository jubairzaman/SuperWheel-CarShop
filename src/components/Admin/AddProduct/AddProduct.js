import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Dashboard from "../dashboard/Dashboard";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://super-wheel-server.vercel.app/vehicles", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review added successfully");
        reset();
      }
    });
  };
  return (
    <div className="container mb-3">
      <Dashboard />
      <div>
        <h1 className="text-center text-uppercase">
          Add <span className="text-danger">Vehicle</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control bg-dark text-white"
            {...register("name", { required: true })}
            placeholder="Vehicle Model Name *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="url"
            className="form-control bg-dark text-white"
            {...register("img", { required: true })}
            placeholder="Vehicle Image Url *"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control bg-dark text-white"
            {...register("price", { required: true })}
            placeholder="Vehicle Price *"
          />
        </div>

        <div className="form-group mb-3">
          <textarea
            className="form-control bg-dark text-white"
            cols="30"
            rows="5"
            {...register("description", { required: true })}
            placeholder="Vehicle Description *"
          ></textarea>
        </div>
        <div className="form-group text-center">
          <button
            type="submit"
            className="btn btn-lg btn-primary text-uppercase"
          >
            {" "}
            Add New Vehicle{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
