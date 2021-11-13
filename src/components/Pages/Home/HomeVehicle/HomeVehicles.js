import React, { useEffect, useState } from "react";
import { CardGroup, Row } from "react-bootstrap";
import HomeVehicle from "./HomeVehicle";

const HomeVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container  text-center mt-5 mb-5">
      <h1 className='text-center mb-4'>Buy Your  <span className='text-danger'>Dream Car</span></h1>
      <p className="m-3">
        Best Cars In The Town
      </p>


      <Row xs={1} md={3} className=" ms-3 container g-4">


        {vehicles.slice(0, 6).map((vehicle) => (
          <HomeVehicle key={vehicle._id} vehicle={vehicle}></HomeVehicle>
        ))}


      </Row>

    </div>
  );
};

export default HomeVehicles;
