import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const VehicleDetail = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState({});
  const { _id, name, price, description, img } = vehicle;
  useEffect(() => {
    fetch(`https://super-wheel-server.vercel.app/vehicles/${vehicleId}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data));
  }, []);
  return (
    <div className="container mb-3">
      <div className="text-center">
        <img src={img} className="w-50 text-center mt-3" />
      </div>
      <div className="container">
        <h1 className="text-uppercase text-center">{name}</h1>
        <p>
          <span className="text-uppercase fw-bold text-left">
            About {name}:
          </span>{" "}
          {description}
        </p>
        <p className="fw-bold">Price: ${price} </p>
        <Link to={`/order/${_id}`}>
          <button className="btn btn-warning fw-bold text-uppercase">
            Book for {name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleDetail;
