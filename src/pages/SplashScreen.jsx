import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/homepage");
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-secondary">
      <div className="logo">🚗</div>
      <div className="loading"></div>
      <div className="title">Experience the Art of Travel</div>
    </div>
  );
};

export default SplashScreen;
