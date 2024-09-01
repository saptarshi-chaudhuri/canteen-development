import React, { useState, useContext, useEffect } from "react";
import { IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";
// import { Navbar, Nav, Offcanvas } from "react-bootstrap";
// import {
//   House,
//   Search,
//   Bell,
//   Person,
//   ThreeDotsVertical,
// } from "react-bootstrap-icons";

const FooterMobile = () => {
  const dispatch = useDispatch();


  const redirect = useNavigate();

  const landle_logout = () => {
    dispatch(actionCreators.setlogout()).then(() => {
      //console.log(localStorage.getItem("token"))
      // Code to execute after the dispatch is successful
      redirect("/login");
    });
  };
  // const [showOffcanvas, setShowOffcanvas] = useState(false);

  // const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  return (
    <>
   
    <div style={{'width':'100%' , 'height':'70px'}}></div>
<div class="footer_section">
<div class="footer_section">
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td><Link to="/home/UndeliveredOrder"><i class="fas fa-user-circle fa-fw"></i><br/>
    Orders</Link>
    </td>
   <td><Link to="/home/dashboard"><i class="fas fa-home fa-fw"></i><br/>
    Dashboard</Link>
    </td>
   <td><a href="javascript:void(0);" onClick={landle_logout}><i class="fas fa-sign-out-alt fa-fw"></i><br/>
    Logout</a>
    </td>
  </tr>
</table>

</div>

</div>

    </>
  );
};

export default FooterMobile;
