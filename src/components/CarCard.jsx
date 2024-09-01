import React from "react";
import { IconLocation } from "../assets/icons/icon";
import Spinner from "../assets/images/spinner.gif";
import Imagerender from "../common/Imagerender";

// import { FaCar, FaGasPump, FaBan, FaStore } from "react-icons/fa";

const CarCard = ({ carData }) => {
  //console.log(carData);
  const {
    car_entry_id,
    category,
    category_name,
    image,
    model,
    registration_no,
    seat_no,
    ac,
  } = carData;

  return (
    <div className="card">
      <div className="card-body d-flex gap-4 align-items-center">
        <div className="border rounded-3  border-primary border-dashed p-2 bg-light flex-shrink-0 w-100px h-80px">
          <Imagerender
            src={image.split("|||@@@")[0]}
            fallbackSrc={Spinner}
            alt="Car image"
          />
        </div>
        <div className="">
          <h5 className="card-title fs-2 fw-bolder text-dark">{model}</h5>
          <p className="card-text mb-1 fs-4">{`${category_name} • ${
            ac ? "AC" : "Non-AC"
          } • ${seat_no} Seaters`}</p>
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

export default CarCard;
