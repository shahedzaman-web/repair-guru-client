import React from "react";

const BookingListDetails = (props) => {
  const { Status, problem } = props.booking;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {Status === "pending" ? (
          <h2 className="d-inline p-1 rounded bg-danger text-white">
            {Status}
          </h2>
        ) : (
          <h2 className="bg-success text-white">{Status}</h2>
        )}

        <h4>{problem}</h4>
      </div>
    </div>
  );
};

export default BookingListDetails;
