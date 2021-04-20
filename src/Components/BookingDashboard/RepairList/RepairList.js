import React, { useEffect, useState } from "react";

const RepairList = () => {
  const [bookingList, setBookingList] = useState([]);
  const [Status, setStatus] = useState("");
  useEffect(() => {
    fetch("https://repair-guru-sz.herokuapp.com/bookingListDetails")
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, []);
  console.log(bookingList);
  const handleSelect = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
    console.log(Status);
  };
  const handleUpdate = (id) => {
    fetch(`https://repair-guru-sz.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Status),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark rounded mb-3">
          <h2>Repair List</h2>
        </div>
        <table className="table table-borderless">
          <thead className="ms-2  bg-dark text-white rounded">
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Email Id
              </th>
              <th className="text-secondary" scope="col">
                Services
              </th>

              <th className="text-secondary" scope="col">
                Pay With
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
              <th className="text-secondary" scope="col">
                Status Update
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((bookingList, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{bookingList.Name}</td>
                <td>{bookingList.email}</td>
                <td>{bookingList.problem}</td>
                <td>{bookingList.payWith}</td>

                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleSelect}
                  >
                    <option defaultValue>{bookingList.Status}</option>
                    <option value="Pending">Pending</option>
                    <option value="On Going">On Going</option>
                    <option value="Done">Done</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleUpdate(bookingList._id)}>
                    Update
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

export default RepairList;
