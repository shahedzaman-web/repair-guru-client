import React from "react";
import repair from "./../../../image/repair.jpg";
const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1>
          Phone Repair Guru.
          <br /> You break. We fix.
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          maiores, architecto illum doloremque quos nostrum?
        </p>
        <button className="btn btn-success">Repair my device</button>
      </div>
      <div className="col-md-6">
        <img src={repair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
