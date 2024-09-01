import React from "react";
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
    
    <div className="student_dashboard_main">


    <h5>Dashboard</h5>
    <div className="faculty_main_list dashobard_menu" style={{ background:'#d6f6fa'}}>
    <div className="Curriculum_left"><h3><a href="#"><strong>Create KOT</strong></a></h3></div>
    <div className="Curriculum_right" style={{'padding-top': '3px'}}><Link href="javascript:void(0);" to="/home/createkot">
    <img src={arrow} width={512} height={512} /></Link></div>
    <div className="clear"></div>
    </div>

    <div className="faculty_main_list dashobard_menu" style={{ background:'#d6f6fa'}}>
    <div className="Curriculum_left"><h3><a href="#"><strong>Sales Report</strong></a></h3></div>
    <div className="Curriculum_right" style={{'padding-top': '3px'}}><Link to="/Home/OrderHistory"><img src={arrow} width="512" height="512" alt=""/></Link></div>
    <div className="clear"></div>
    </div>


    <div className="faculty_main_list dashobard_menu" style={{ background:'#d6f6fa'}}>
    <div className="Curriculum_left"><h3><a href="#"><strong>Pending KOT</strong></a></h3></div>
    <div className="Curriculum_right" style={{'padding-top': '3px'}}><Link to="/Home/PendingKot"><img src={arrow} width="512" height="512" alt=""/></Link></div>
    <div className="clear"></div>
    </div>

    <div className="faculty_main_list dashobard_menu" style={{ background:'#d6f6fa'}}>
    <div className="Curriculum_left"><h3><a href="#"><strong>Orders</strong></a></h3></div>
    <div className="Curriculum_right" style={{'padding-top': '3px'}}><Link to="/Home/UndeliveredOrder"><img src={arrow} width="512" height="512" alt=""/></Link></div>
    <div className="clear"></div>
    </div>


    <div className="faculty_main_list dashobard_menu" style={{ background:'#d6f6fa'}}>
    <div className="Curriculum_left"><h3><a href="#"><strong>Menu</strong></a></h3></div>
    <div className="Curriculum_right" style={{'padding-top': '3px'}}><Link to="/Home/MenuList"><img src={arrow} width="512" height="512" alt=""/></Link></div>
    <div className="clear"></div>
    </div>
    
    </div>
    
    
    </>
  );
};

export default Homepage;
