import React,{ useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import Alerts from "../common/Alerts";
import { usePostDataWithAuth } from "../utils/Api";
import BgRoad from "../assets/images/bg-road.svg";
import ScheduledPickup from "../components/ScheduledPickup";
import FiltercarCategorySection from "../components/FiltercarCategorySection";
import { getData,useGetDataWithAuth } from "../utils/Api";




const CarList = () => {
  const { postDataWithAuth } = usePostDataWithAuth();
 
  const [formData, setFormData] = useState({
    menu: '',
    rate: '',
    menu_id:0
  });

  // State to store validation errors
  const [errors, setErrors] = useState({
    menu: '',
    rate: ''
  });
  const { getDataWithAuth } = useGetDataWithAuth();
  const handleEdit = () => {
    // Implement your edit functionality here
    console.log("Edit button clicked");
  };
 var filters=['SUV','Sedan'];
  //   filter
  const [menuitems, setmenuitems] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for the specific field
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.menu) {
      newErrors.menu = 'Required';
    }

    if (!formData.rate) {
      newErrors.rate = 'Required';
    } else if (isNaN(formData.rate)) {
      newErrors.rate = 'Required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form
     // console.log('Form data submitted:', formData);
     let api_name="";
     if(formData.menu_id==0)
      {
         api_name='addmenu';
      }
      else
      {
         api_name='editmenu';
      }
      //console.log (formData);
      //return;

      postDataWithAuth(`Authrjs/${api_name}`, formData)
        .then((response) => {

          //console.log(response.data.menu_id);
          if(api_name=='addmenu')
          setmenuitems((prevmenuitems) => [...prevmenuitems, {menu_id: response.data.menu_id, name: formData.menu, price: formData.rate, special_price: formData.rate}]);
          else
          {
            window.location.reload();
          }
         
        })
        .catch((error) => {});

      // Clear the form
      setFormData({
        menu: '',
        rate: '',
        menu_id: 0
      });
    }
  };

  useEffect(() => {

    getData('Authrjs/allmenu')
      .then(response => {

        //console.log(response.data.category_data);

        setmenuitems(response.data.menu_data);

        //console.log(menuitems)
      
      })
      .catch(error => {
       
      });


      



      

     
    
  }, []);

  const editMenu= (index) => {

    setFormData({
      menu: menuitems[index].name,
      rate: menuitems[index].price,
      menu_id: menuitems[index].menu_id,
    });



  }

 
  return (
    <>
    <div className="student_dashboard_main">
    <h5>Manage Menu</h5>
    <div className="search_section">
    <form onSubmit={handleSubmit}>
      <table border="0" cellSpacing="0" cellPadding="4" width="100%" className="kot_menu">
        <tbody>
          <tr>
            <td width="200">
              <label>Enter Menu</label>
              <input
                name="menu"
                type="text"
                className="form-control"
                value={formData.menu}
                onChange={handleChange}
              />
              {errors.menu && <p style={{ color: 'red','font-size':10 }}>{errors.menu}</p>}
            </td>
            <td>
              <label>Rate</label>
              <input
                name="rate"
                type="text"
                className="form-control"
                value={formData.rate}
                onChange={handleChange}
              />
              {errors.rate && <p style={{ color: 'red','font-size':10 }}>{errors.rate}</p>}
            </td>
            <td width="100">
              <label style={{ width: '100%' }}>&nbsp;</label>
              <button
                type="submit"
                className="fxt-btn-fill"
                style={{ padding: '10px 10px' }}
              >
                Save
              </button>
              {(errors.rate || errors.menu) && <p style={{ color: 'red','font-size':10 }}>&nbsp;&nbsp;</p>}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
      <div className="payment_kot_list kot_menu_list">
        <table border="0" cellspacing="0" cellpadding="4" width="100%">
          <tbody>
            <tr>
              <td width="75%"><strong>Menu</strong></td>
              <td ><strong>Rate</strong></td>
              <td width="15%"><strong>Action</strong></td>
            </tr>
            {menuitems.map((item, index) => (
            <tr key={index}>
              <td width="75%">{item.name} </td>
              <td ><strong>{item.price}</strong></td>
              <td width="15%"><a href="javascript:void(0);" onClick={() => editMenu(index)}><i className="fas fa-edit fa-fw"></i></a> <a href="#"><i className="fas fa-trash fa-fw"></i></a></td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div style={{'width':'100%', 'height':'70px'}}></div>
    </>
  );
};

export default CarList;
