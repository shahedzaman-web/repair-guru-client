import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className=" footer-style">
      <div className="row container">
        <div className="col-8">
          <p className="p-2">&#169; All Right Reserved. Md. Shaheduzzaman</p>
        </div>
        <div className="col-2"></div>
        <div className="col-2 ">
          <a
            className="rounded"
            target="_blank"
            href={"https://www.facebook.com/Shahedxxaman/"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
          <a
            target="_blank"
            href={"https://github.com/shahedzaman-web"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
