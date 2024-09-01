import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../utils/Context";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Header(props) {
  const { user, mode, changemode } = props;

  const { states, updateUser } = useContext(AppContext);

  const handleChangeUser = () => {
    //alert()
    if (states.bgcolor == "dark") {
      updateUser({
        bgcolor: "light",
        textcolor: "dark",
      });
    } else {
      updateUser({
        bgcolor: "dark",
        textcolor: "light",
      });
    }
  };

  // header on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //const [mode,updatefieldval]=useState("Light");
  return (
    <>
   
    </>
  );
}
