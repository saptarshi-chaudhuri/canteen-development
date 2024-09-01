import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../utils/Context";
import { Link } from "react-router-dom";
import logo from "../assets/images/Buniadpur-Mahavidyalaya-1.jpg";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";
import { Offcanvas, Image, Nav } from "react-bootstrap";
import { useSelector } from 'react-redux';
import {useGetDataWithAuth } from "../utils/Api";

export default function Header(props) {
  const { getDataWithAuth } = useGetDataWithAuth();

 
  //alert(userdetail);
  const { user, mode, changemode } = props;

  const dispatch = useDispatch();

  const { states, updateUser } = useContext(AppContext);
  const [initial, setinitial ] = useState("");

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

  const redirect = useNavigate();

  const landle_logout = () => {
    dispatch(actionCreators.setlogout()).then(() => {
      //console.log(localStorage.getItem("token"))
      // Code to execute after the dispatch is successful
      redirect("/login");
    });
  };

  // header on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    getDataWithAuth('Authrjs/userdetail')
      .then(response => {

        console.log("aaaaaaaaa"+response.data.initial);

        setinitial(response.data.initial)

        //setfilterdriveritems(response.data.driver_data);

        //console.log(categoryitems)
      
      })
      .catch(error => {
       
      });

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const [mode,updatefieldval]=useState("Light");
  return (
    <> 
    <div className="sub_header">
    <table border="0" cellspacing="0" cellpadding="0" width="100%">
      <tr>
       
        <td align="left" style={{ 'font-weight': 'bold', 'padding-left':'15px'}}>Smart Canteen</td>
        <td width="105" align="right"  style={{'padding-right':'10px'}}> <a className="user_box" href="#">{initial}</a></td>
      </tr>
    </table>
    </div>
    
    </>
  );
}
