import React,{useState} from "react";
import BgRoad from "../../assets/images/bg-road.svg";
import { postData } from '../../utils/Api'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




const Registration = () => {

    const redirect = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    password: '',
    confirmPassword: '',
    ownername: '',
    address: '',
});

// Initialize errors state
const [errors, setErrors] = useState({});

// Function to handle changes in the form fields
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });

    // Clear the error message for the field being updated
    setErrors({
        ...errors,
        [name]: '',
    });
};

// Function to validate the form fields
const validate = () => {
    const newErrors = {};

    if (!formData.name) {
        newErrors.name = 'Business name is required';
    }

    if (!formData.email) {
        newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
    }

    if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.pincode) {
        newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode = 'Pincode must be 6 digits';
    }

    if (!formData.password) {
        newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.ownername) {
        newErrors.ownername = 'Owner name is required';
    }

    if (!formData.address) {
        newErrors.address = 'Address is required';
    }

    return newErrors;
};

// Function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        postData('authrjs/Registration',formData).then(data => {
            if (data.status_code === 200) {

                redirect('/Login');
            }
          });
    }
};

  return (
    <>
      {/* Begin: Page Content Wrapper */}
      <div className="pageContent d-flex flex-column min-vh-100">
        {/* Begin: Header Section */}
        <section className="hero_section d-flex flex-column position-relative pt-20 pb-90 bg-secondary rounded-bottom-5 overflow-hidden">
          <img
            src={BgRoad}
            className="bgRoad h-100 position-absolute top-0 start-0"
            alt="Experience the Art of Travel"
          />
          {/* .header-height */}
          <div className="header-height"></div>
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-12 text-white mb-4">
                <h1 className="fs-5 fw-semibold mb-2 ">Become a Host</h1>
                <h2 className="typing-effect d-block fs-3 fw-semibold">
                  Register Your Vehicle and Start Earning Today
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* End: Header Section */}

        {/* Begin: Booking Section */}
        <section className="mt-n90 position-relative z-1">
          {/* Begin: Booking Section */}
          <div className="container-lg">
            <div className="rounded-4 bg-white p-sm-20 p-4">
              <div className="form-container">
                <h3 className=" fs-1 fw-semibold">Register Now</h3>
                <div className="title_effect_line_bottom mb-4"></div>
                {/* Begin: Booking Form */}
                <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="form-floating">
                        <i className="bi bi-geo-alt"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Business Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label>Business Name</label>
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <i className="bi bi-geo-alt"></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Owner Name"
                            name="ownername"
                            value={formData.ownername}
                            onChange={handleChange}
                        />
                        <label>Owner Name</label>
                        {errors.ownername && <span style={{ color: 'red' }}>{errors.ownername}</span>}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <i className="bi bi-geo-alt-fill"></i>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-floating">
                        <i className="bi bi-geo-alt-fill"></i>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone No."
                        />
                        <label>Phone</label>
                        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                        <label>Pincode</label>
                        {errors.pincode && <span style={{ color: 'red' }}>{errors.pincode}</span>}
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <label>Address</label>
                        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <label>Confirm Password</label>
                        {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
                        {!errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
                        
                    </div>
                </div>

               

                <div className="col-12 d-flex">
                    <button type="submit" className="btn btn-primary flex-grow-1 ms-md-auto">
                        Submit
                    </button>
                </div>

                <div className="col-12 d-flex">
                              <Link to="/login" className="btn btn-primary flex-grow-1 ms-md-auto btn-grey" href="javascript:void(0)">
                              Already Registered?
                  </Link>
                                  
                              </div>
            </div>
            </form>
                {/* End: Booking Form */}
              </div>
            </div>
          </div>
        </section>
        {/* End: Booking Section */}
      </div>
      {/* End: Page Content Wrapper */}
    </>
  );
};

export default Registration;
