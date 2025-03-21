import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid p-0 bg-dark py-4 overflow-hidden">
      <div className="row text-center">
        <ul className="list-inline ">
          <li className="list-inline-item text-white me-3">Privacy Policy |</li>
          <li className="list-inline-item text-white me-3">
            Terms and Conditions |
          </li>
          <li className="list-inline-item text-white">Cookies</li>
        </ul>
      </div>
      <div className="row text-white ">
        <p className="text-center"> ©2024 adidas India Marketing Pvt. Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
