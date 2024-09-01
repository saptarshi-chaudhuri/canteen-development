import React, { useState } from "react";
import { IconLocation } from "../assets/icons/icon";
// import { Navbar, Nav, Offcanvas } from "react-bootstrap";
// import {
//   House,
//   Search,
//   Bell,
//   Person,
//   ThreeDotsVertical,
// } from "react-bootstrap-icons";

const Alerts = (props) => {

    const{type,message}=props;

  return (
    <>
      {
        (() => {
          switch (type) {
            case 'info':
              return <div class="alert alert-info" role="alert">
              {message}
            </div>;
            case 'success':
              return <div class="alert alert-success" role="alert">
              {message}
            </div>;
            case 'error':
              return <div class="alert alert-danger" role="alert">
             {message}
            </div>;
            default:
              return null;
          }
        })()
      }
    </>
  );
};

export default Alerts;
