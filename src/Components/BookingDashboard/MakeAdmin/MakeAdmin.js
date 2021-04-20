import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { handleSubmit } = useForm();
  const [admin, setAdmin] = useState({
    Email: "",
  });

  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };
  const onSubmit = (data) => {
    const submitData = {
      Email: admin.Email,
    };
    const url = `https://repair-guru-sz.herokuapp.com/adminUser`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    }).then((res) => console.log("server side response", res));

    console.log(submitData);
    console.log(admin);
  };
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Make Admin</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label> Email</label>
            <input
              type="Email"
              name="Email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="jon@gmail.com"
              onBlur={handleBlur}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
