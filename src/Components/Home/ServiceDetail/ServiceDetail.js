import React from "react";

import "./ServicesDetail.css";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center shadow-sm  p-2 icon-hover">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front d-flex justify-content-center align-items-center flex-column">
            <img className="img-fluid" src={service.imageURL} alt="" />
          </div>

          <div className="flip-card-back pt-5 d-flex justify-content-center align-items-center flex-column">
            <h3 className="">{service.title}</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, laborum.
            </p>
            <button className="btn btn-primary">Fix </button>
          </div>
        </div>
      </div>
      {/* <div className="mr-3 ">
        <FontAwesomeIcon
          className="info-icon icon-hover"
          style={{ fontSize: "8rem", color: "#29bb89" }}
          icon={service.icon}
        ></FontAwesomeIcon>
      </div>
      <h4 className="py-3">{service.title}</h4>
      <small>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
        laborum.
      </small> */}
    </div>
  );
};

export default ServiceDetail;
