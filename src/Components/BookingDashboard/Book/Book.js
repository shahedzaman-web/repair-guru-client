import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IgSI9F4yeXQYhjtFKzew6gORD643ytYLUt9MLllmanF3ZwaKR3nsWDNJatSXcVZrJ2YRvXQ9RK0c1DxgZ0DNp4c00d0oioKkW"
);

const Book = () => {
  const { handleSubmit } = useForm();

  const [customerInfo, setCustomerInfo] = useState({
    Name: "",
    email: "",
    problem: "",
    payWith: "Credit Card",
    Status: "pending",
  });

  const handleBlur = (e) => {
    const newCustomerInfo = { ...customerInfo };
    newCustomerInfo[e.target.name] = e.target.value;
    setCustomerInfo(newCustomerInfo);
  };
  const onSubmit = (data) => {
    const submitData = {
      Name: customerInfo.Name,
      email: customerInfo.email,

      problem: customerInfo.problem,
    };
    const url = `https://repair-guru-sz.herokuapp.com/bookInfo`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerInfo),
    }).then((res) => console.log("server side response", res));

    console.log(submitData);
    console.log(customerInfo);
  };
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Book</h2>
          <br />
          <h4>Pay With</h4>
          <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
          </Elements>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="Name"
              name="Name"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onBlur={handleBlur}
            />
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onBlur={handleBlur}
            />
            <label>Details problem about your device</label>
            <input
              type="problem"
              name="problem"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Details problem about your device"
              onBlur={handleBlur}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
