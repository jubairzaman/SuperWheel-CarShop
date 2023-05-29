import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Reviews from "../../Pages/Reviews/Reviews";
import Dashboard from "../../Admin/dashboard/Dashboard";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://super-wheel-server.vercel.app/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review added successfully");
        reset();
      }
    });
  };
  return (
    <div>
        <Dashboard />
        <div className="container text-center my-5">
        
        <Reviews />
        <div className="section-header text-center mb-5">
          <h3>Leave Your <span className='text-danger'>Review</span></h3>
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="form-group mb-3">
            <input
              type="url"
              className="form-control bg-dark text-white"
              {...register("img", { required: true})}
                placeholder="Your Image Url *" 
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control bg-dark text-white"
              {...register("name", { required: true})}
              placeholder="Name *"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              className="form-control bg-dark text-white"
              cols="30"
              rows="10"
              {...register("review", { required: true})}
              placeholder="Review *"
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-lg btn-primary text-uppercase"
            >
              {" "}
              Submit Your Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
