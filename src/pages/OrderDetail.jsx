import {React,useEffect,useState} from "react";
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import { usePostDataWithAuth } from "../utils/Api";
import { getData} from "../utils/Api";
import Alerts from "../common/Alerts";
import { useParams } from 'react-router-dom';



const OrderDetail = () => {
    const { id } = useParams();

    const { postDataWithAuth } = usePostDataWithAuth();
    
    
      const [selectedmenuitems, setselectedmenuitems] = useState([]);
      const [totalamount, setTotalAmount] = useState([]);
      

      


    useEffect(() => {

        getData(`Authrjs/kotdetail/${id}`)
        .then(response => {
  
          //console.log(response.data.category_data);
  
          setselectedmenuitems(response.data.kot_detail_data);

          let total = 0;
          response.data.kot_detail_data.forEach((item) => {
            total += parseInt(item.total);
          });
          setTotalAmount(total);
  
          //console.log(menuitems)
        
        })
        .catch(error => {
         
        });
  
    
          
    
    
    
          
    
         
        
      }, []);

      


   
  return (
    <>
    <div class="student_dashboard_main">
<h5>ORDER DETAIL</h5>

<div class="search_section">

<div class="student_dashboard_main_inner" style={{'font-size': '14px',  'font-weight': 'bold'}}>KOT{id}</div>
{selectedmenuitems[0] && (
  <div className="student_dashboard_main_inner" style={{ fontSize: '14px', fontWeight: 'bold' }}>
    {selectedmenuitems[0].student_name} ({selectedmenuitems[0].student_uid})
  </div>
)}



<div class="payment_kot_list kot_menu_list">
<table border="0" cellspacing="0" cellpadding="4" width="100%">
  <tbody><tr>
    <td width="75%"><strong>Menu</strong></td>
    <td width="15%"><strong>Qty</strong></td>
    <td><strong>Amount</strong></td>
  </tr>

  {selectedmenuitems.map((item, index) => (
  <tr key={index}>
    <td width="75%">{item.name} </td>
    <td width="15%">{item.quantity} </td>
    <td><strong>{item.total}</strong></td>
  </tr>
  ))}
   {selectedmenuitems.length === 0 ? (
          <Alerts type="info" message="No Data Yet!" />
        ) : (
          <tr >
          <td width="75%" colspan="2"><strong>Total</strong></td>
          
          <td><strong>Rs.{totalamount}</strong></td>
        </tr>
        )}
  
</tbody></table>

</div>





</div>





</div>
















<div style={{width:'100%', height:'70px'}}></div>
    
    
    </>
  );
};

export default OrderDetail;
