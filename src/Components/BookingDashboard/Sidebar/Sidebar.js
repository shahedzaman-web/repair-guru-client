import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://repair-guru-sz.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  });

  return (
    <>
      <div className="col-md-2 col-sm-6 col-12">
        <div
          className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul className="list-unstyled">
            <li>
              <Link to="/bookingDashboard" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Book </span>
              </Link>
            </li>
            <li>
              <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faAlignLeft} /> <span>Review</span>
              </Link>
            </li>
            {isAdmin && (
              <div>
                <li>
                  <Link to="/repairList" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Repair List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Add Service</span>
                  </Link>
                </li>
                <li>
                  <Link to="/makeAdmin" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Make Admin</span>
                  </Link>
                </li>
                <li>
                  <Link to="/manageService" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Manage Services</span>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
