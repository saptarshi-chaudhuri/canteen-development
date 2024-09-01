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

const Imagerender = (props) => {
  const { src, fallbackSrc, alt } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      className="w-100 h-100 rounded object-fit-contain bg-white"
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default Imagerender;
