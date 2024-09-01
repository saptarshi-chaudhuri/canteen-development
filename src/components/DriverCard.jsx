import React from "react";
import { IconLocation } from "../assets/icons/icon";
import Imagerender from "../common/Imagerender";
import Spinner  from "../assets/images/spinner.gif";




// import { FaCar, FaGasPump, FaBan, FaStore } from "react-icons/fa";

const DriverCard = ({ driverData }) => {

  //console.log(carData);
  const {
    driver_id,
    vendor_id,
    user_id,
    driver_name,
    added_on,
    phone_no,
    photo
  } = driverData;

  return (
    <div className="card">
      <div className="card-body d-flex gap-4 align-items-center">
        <div className="border rounded-3 border-2 border-primary border-dashed p-3 flex-shrink-0 w-80px h-80px">
        <Imagerender
        src={photo.split('|||@@@')[0]}
        fallbackSrc={Spinner}
        alt="Car image"
      />
        </div>
        <div className="">
          <h5 className="card-title">{driver_name}</h5>
          <p className="card-text mb-1">Phone No {phone_no}</p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            {/* <h4 className="mb-0">₹{price}</h4>
            <small className="text-muted text-decoration-line-through">
              ₹{originalPrice}
            </small>
            <span className="badge bg-success">{discount}% Off</span> */}
          </div>
        </div>
      </div>
      {/* <div className="card-body border-top">
        <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
          <li>
            <IconLocation className="fill-primary me-2" size="icon-size-14" />
            Extra km fare <span className="float-end">{extraKmFare}</span>
          </li>
          <li>
            <IconLocation className="fill-primary me-2" size="icon-size-14" />
            Fuel type <span className="float-end">{fuelType}</span>
          </li>
          <li>
            <IconLocation className="fill-primary me-2" size="icon-size-14" />
            Cancellation <span className="float-end">{cancellationPolicy}</span>
          </li>
        </ul>
      </div> */}
      {/* <div className="card-footer">
        <ul className="list-unstyled m-0">
          <li>
            
            {vendorName}
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default DriverCard;
