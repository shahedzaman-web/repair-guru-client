import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    fetch("https://repair-guru-sz.herokuapp.com/servicesList")
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  console.log(servicesList);
  const deleteEvent = (id) => {
    fetch(`https://repair-guru-sz.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted Product");
      });
  };
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Manage Services</h2>
        </div>
        <table className="table table-borderless">
          <thead className="ms-2  bg-dark text-white rounded">
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>
              <th className="text-secondary" scope="col">
                Service Title
              </th>
              <th className="text-secondary" scope="col">
                Description
              </th>
              <th className="text-secondary" scope="col">
                Price
              </th>

              <th className="text-secondary" scope="col">
                Status Update
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesList.map((servicesList, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{servicesList.serviceTitle}</td>
                <td>{servicesList.description}</td>
                <td>{servicesList.price}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEvent(servicesList._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageServices;
