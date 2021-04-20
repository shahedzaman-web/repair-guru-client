import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { handleSubmit } = useForm();
  const [customerInfo, setCustomerInfo] = useState({
    Name: "",
    email: "",
    problem: "",
  });

  const handleBlur = (e) => {
    const newCustomerInfo = { ...customerInfo };
    newCustomerInfo[e.target.name] = e.target.value;
    setCustomerInfo(newCustomerInfo);
    // console.log(e.target.value);
    // e.target.name = e.target.value;
    // console.log(e.target.name);
  };
  const onSubmit = (data) => {
    const submitData = {
      Name: customerInfo.Name,
      email: customerInfo.email,

      description: customerInfo.description,
    };
    const url = `https://repair-guru-sz.herokuapp.com/userReview`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    }).then((res) => console.log("server side response", res));

    console.log(submitData);
    console.log(customerInfo);
  };
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Review</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Your Name</label>
            <input
              type="Name"
              name="Name"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Your Name"
              onBlur={handleBlur}
            />
            <label>Company’s name, Designation</label>
            <input
              type="details"
              name="email"
              className="form-control"
              aria-describedby="details"
              placeholder="Company’s name, Designation"
              onBlur={handleBlur}
            />
            <label>Description</label>
            <input
              name="description"
              className="form-control pb-5"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
              onBlur={handleBlur}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
