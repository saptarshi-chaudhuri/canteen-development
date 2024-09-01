import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { IconLocation } from "../assets/icons/icon";
// import { FaFilter } from 'react-icons/fa';

const FiltercarCategorySection = ({ filters, onClick }) => {
  const [selectedbutton, setSelectedbotton] = useState([]);

  const handleClick = (val) => {
    setSelectedbotton(val);

    //console.log('Button Clicked, Category ID:', val); // Debugging line

    onClick(val);

    //alert(val)
  };

  return (
    <div className="d-flex align-items-center bg-white p-3 rounded-4">
      <Swiper
        freeMode={true}
        modules={[FreeMode, Navigation]}
        slidesPerView="auto"
        spaceBetween={5}
        navigation
        className="rm-swiper ms-0"
      >
        <SwiperSlide style={{ width: "auto" }}>
          <button
            className={`btn btn-sm fw-semibold ${
              selectedbutton == 0 ? "btn-primary" : "btn-light"
            } rounded-pill`}
            onClick={() => handleClick(0)}
          >
            All
          </button>
        </SwiperSlide>
        {filters.map((filter, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <button
              className={`btn btn-sm fw-semibold ${
                selectedbutton == filter.car_category_id
                  ? "btn-primary"
                  : "btn-light"
              } rounded-pill`}
              onClick={() => handleClick(filter.car_category_id)}
            >
              {filter.category_name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link
        to="/Home/Addcar"
        className="btn btn-primary ms-2 btn-icon flex-shrink-0 px-20 fw-semibold rounded-pill filterCategory_btn--right"
      >
        Add New Car
      </Link>
    </div>
  );
};

export default FiltercarCategorySection;
