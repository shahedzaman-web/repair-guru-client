import React from "react";

const Testimonial = (props) => {
  const { Name, email, description } = props.testimonial;
  console.log(props);
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="card-text text-center">{Name}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <div>
          <h6 className="text-primary">{email}</h6>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
