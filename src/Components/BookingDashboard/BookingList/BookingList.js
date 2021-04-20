import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookingListDetails from "./BookingListDetails";
const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // useEffect(() => {
  //   fetch("https://repair-guru-sz.herokuapp.com/bookingList")
  //     .then((res) => res.json())
  //     .then((data) => setBookingList(data));
  // }, []);
  useEffect(() => {
    fetch("https://repair-guru-sz.herokuapp.com/bookingList", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  });
  console.log(bookingList);
  return (
    <>
      <div className="col-md-10 col-sm-12 col-12">
        <div className="p-2 ms-2 d-block  bg-light text-dark">
          <h2>Booking List</h2>
        </div>
        {bookingList.map((booking) => (
          <BookingListDetails booking={booking}></BookingListDetails>
        ))}
      </div>
    </>
  );
};

export default BookingList;
