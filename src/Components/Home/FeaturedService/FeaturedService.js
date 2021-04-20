import React from "react";
import featured from "../../../image/security.jpg";
const FeaturedService = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>PRIVACY POLICY</h1>
            <p className="text-secondary my-5">
              Our company pays special attention to privacy of your data. No
              information from your gadget will be transferred to a third party.
              We respect our customers.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
