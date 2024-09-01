import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { IconLocation } from "../assets/icons/icon";
// import { FaFilter } from 'react-icons/fa';

const AddDriverSection = ({}) => {

  

  return (
    <div className="d-flex align-items-center bg-white p-3 rounded-4">
      
      <Link to="/Home/AddDriver" 
        className="btn btn-primary btn-sm ms-2 btn-icon flex-shrink-0"
        
      >
        
        Add New Driver
      </Link>
    </div>
  );
};

export default AddDriverSection;
