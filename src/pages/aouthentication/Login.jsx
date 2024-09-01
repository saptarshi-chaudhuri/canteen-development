import React, { useState } from 'react';
import axios from 'axios';
import { postData } from '../../utils/Api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';//import { useHistory } from 'react-router-dom';
import logo from "../../assets/images/logo.png";


import BgImage from '../../assets/images/Buniadpur-Mahavidyalaya-1.jpg'; // Ensure this path is correct for your project

const Login = () => {

    const dispatch=useDispatch();


    const redirect = useNavigate();
    // Initialize form state
    const [formData, setFormData] = useState({
        phone_no: '',
        password: '',
    });
    //const history = useHistory();

    // Initialize errors state
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

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

        if (!formData.phone_no) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone_no)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            postData('authrjs/Login',formData).then(response => {
                if (response.status_code === 200) {


                 

                    dispatch(actionCreators.setlogin(response.data.token));
                    let userDetails = JSON.stringify({
                        name: response.data.name,
                        email: response.data.email,
                        user_type: response.data.user_type
                      });

                    //console.log(userDetails);
                    dispatch(actionCreators.setuserdetail(userDetails))
                    .then(() => {

                     
                      redirect('/home/dashboard');
                    })                    

                  
                }
              });

            
        }
    };

    return (
        <div className="main_section">
        <div className="header_section">
          <div className="header_overlay">
          <div className="logo">
              <img src={logo} width="100" height="91" alt="Buniadpur Mahavidyalaya" />
            </div>
            <div className="logo">
              <img src={BgImage} width="280" height="91" alt="Buniadpur Mahavidyalaya" />
            </div>
            <h3>Canteen</h3>
            <div className="fxt-main-form">
              <div className="fxt-inner-wrap fxt-opacity fxt-transition-delay-13">
                <h2 className="fxt-page-title">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="fxt-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone_no"
                      placeholder="Enter Mobile Number"
                      value={formData.phone_no}
                      onChange={handleChange}
                      
                    />
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label className="fxt-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your ID"
                      value={formData.password}
                      onChange={handleChange}
                      
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="fxt-btn-fill btn btn-primary">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;