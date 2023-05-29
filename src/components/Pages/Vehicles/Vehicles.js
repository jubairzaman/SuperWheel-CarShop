import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import VehicleCard from "../Vehicle/VehicleCard";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://super-wheel-server.vercel.app/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container text-center ">
      <h1 className="text-danger">Buy Your Dream Car</h1>
      <p>
        WE LOVE OUR CARS From trucks, sedans, SUVs, and station wagons to
        hatchbacks, hot rods, and scratched-up street beaters
      </p>
      <CardGroup>

      </CardGroup>


      <Row xs={1} md={4} className="g-4">


        {
          vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
          ))
        }


      </Row>


    </div >
  );
};

export default Vehicles;
