import React, { useState, useContext, useEffect } from "react";
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";
import Alerts from "../common/Alerts";

import {useGetDataWithAuth,usePostDataWithAuth } from "../utils/Api";




const UndeliveredOrder = () => {
  const { postDataWithAuth } = usePostDataWithAuth();
  const { getDataWithAuth } = useGetDataWithAuth();
  const [wallet_balance, setwalletbalance ] = useState("");
  const [user_detail, setuserdetail ] = useState({name:"",student_id:""});
  const [undeliveredkot, setundeliveredkot ] = useState([]);

  useEffect(() => {

    

          getDataWithAuth('Authrjs/undeliveredkotadmin')
          .then(response => {

            setundeliveredkot(response.data.kot_data)
    
            //console.log("aaaaaaaaa"+response.data.initial);
    
            //setuserdetail({name:response.data.name,student_id:response.data.student_id})
    
            //setfilterdriveritems(response.data.driver_data);
    
            //console.log(categoryitems)
          
          })
          .catch(error => {
           
          });

  


    
  }, []);

  const mark_delivered=async(index,kotid,status)=>{

    try {
      const postdata={kot_id:kotid};
      let api_url="";

      
          const response = await postDataWithAuth(`Authrjs/markdelivered`, postdata);

      if(response.status_code==200)
        {
          setundeliveredkot((prevdata) => {
            const updateddata = [
                ...prevdata.slice(0, index),
                ...prevdata.slice(index + 1)
            ];
    
            return updateddata;
        });
        }
      //setTimeout(window.location.reload(), 2000);
      // Handle response or redirect
      // redirect("/Home/CarList");
    } catch (error) {
      // Handle error
    }

  }
  return (
    <>
    
    <div class="student_dashboard_main">


<h5>Orders</h5>
{undeliveredkot.map((item, index) => (
<div class="payment_kot_list">
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="40%">Tns. No. <Link to={`/home/OrderDetail/${item.kot_id}`}>KOT{item.kot_id}</Link><br></br>Name:{item.student_name} (ID: {item.student_id})<br></br>Mobile:{item.mobile}</td>
    <td width="15%"><strong>Rs.{item.amount}</strong></td>
    <td width="20%"></td>
    <td width="20%" ><a style={{"margin-left":"5px","background-color":"blue"}} onClick={()=>mark_delivered(index,item.kot_id,1)} href="#" class="btn_approved">Mark Delivered</a></td>
  </tr>
</table>

</div>
))}
            {(undeliveredkot.length===0)? <Alerts type="info" message="No Data Yet!"/> : null}






</div>

















<div style={{width:'100%', height:'70px'}}></div></>
  );
};

export default UndeliveredOrder;
