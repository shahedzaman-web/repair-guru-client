import React, { useEffect, useState } from "react";

import ServiceDetail from "../ServiceDetail/ServiceDetail";

// const serviceData = [
//   {
//     title: "MOBILE PHONES",

//     icon: faMobile,
//   },
//   {
//     title: "TABLETS",

//     icon: faTabletAlt,
//   },
//   {
//     title: "Game Console",

//     icon: faGamepad,
//   },
// ];

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(`https://repair-guru-sz.herokuapp.com/servicesList`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  });
  return (
    <section className="services-container">
      <div className="text-center my-3">
        <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
        <h1>Services We provide </h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 ">
          {serviceData.map((service) => (
            <ServiceDetail
              key={service.title}
              service={service}
            ></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
