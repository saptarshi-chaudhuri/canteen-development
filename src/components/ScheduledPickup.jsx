import React from "react";
import { IconLocation } from "../assets/icons/icon";

const ScheduledPickup = ({ date, time, day, distance, duration, onEdit }) => {
  return (
    <div className="card">
      <div className="card-header bg-transparent border-success d-flex justify-content-between align-items-center">
        <span className="btn btn-sm btn-primary-subtle border-dashed border-primary btn-icon">
          <IconLocation className="icon-size-14" />
          Scheduled pick up
        </span>
        <button className="btn btn-sm btn-light btn-icon" onClick={onEdit}>
          <IconLocation className="icon-size-14" />
          Edit
        </button>
      </div>
      <div className="card-body text-success">
        <h5 className="card-title fs-2 fw-bolder text-dark">{`${date}, ${time}, ${day}`}</h5>
        <p className="card-text fs-5 fw-medium text-gray">{`${distance} • Approx ${duration}`}</p>
      </div>
    </div>
  );
};

export default ScheduledPickup;
