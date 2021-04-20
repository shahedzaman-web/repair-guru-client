import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "../Book/Book";
import Review from "../Review/Review";
import RepairList from "../RepairList/RepairList";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import BookingList from "../BookingList/BookingList";
import ManageServices from "../ManageServices/ManageServices";
const BookingDashboard = () => {
  return (
    <Router>
      <div className="row">
        <Sidebar></Sidebar>

        <Switch>
          <Route exact path="/bookingDashboard">
            <Book></Book>
          </Route>

          <Route exact path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/repairList">
            <RepairList></RepairList>
          </Route>
          <Route path="/manageService">
            <ManageServices></ManageServices>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default BookingDashboard;
