import React, { useState, useContext, useEffect } from "react";
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";
import Alerts from "../common/Alerts";

import {useGetDataWithAuth,usePostDataWithAuth } from "../utils/Api";




const PendingKot = () => {
  const { postDataWithAuth } = usePostDataWithAuth();
  const { getDataWithAuth } = useGetDataWithAuth();
  const [wallet_balance, setwalletbalance ] = useState("");
  const [user_detail, setuserdetail ] = useState({name:"",student_id:""});
  const [pendingkot, setpendingkot ] = useState([]);

  useEffect(() => {

    

          getDataWithAuth('Authrjs/pendingkotadmin')
          .then(response => {

            setpendingkot(response.data.kot_data)
    
            //console.log("aaaaaaaaa"+response.data.initial);
    
            //setuserdetail({name:response.data.name,student_id:response.data.student_id})
    
            //setfilterdriveritems(response.data.driver_data);
    
            //console.log(categoryitems)
          
          })
          .catch(error => {
           
          });

  


    
  }, []);

  const changestatus=async(index,kotid,status)=>{

    try {
      const postdata={kot_id:kotid};
      let api_url="";

      if(status==3)
        {
          
           api_url="adminactivekot";
      //const response = await postDataWithAuth("Authrjs/adminactivekot", postdata);
        }
        if(status==2)
          {
             api_url="admindeletekot";
        //const response = await postDataWithAuth("Authrjs/admindeletekot", postdata);
          }
          const response = await postDataWithAuth(`Authrjs/${api_url}`, postdata);

      if(response.status_code==200)
        {
          setpendingkot((prevdata) => {
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


<h5>KOT</h5>
{pendingkot.map((item, index) => (
<div class="payment_kot_list">
<table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tr>
    <td width="40%">Tns. No. <Link to={`/home/OrderDetail/${item.kot_id}`}>KOT{item.kot_id}</Link><br></br>Name:{item.student_name} (ID: {item.student_id})<br></br>Mobile:{item.mobile}</td>
    <td width="15%"><strong>Rs.{item.amount}</strong></td>
    <td width="20%"><a href="javascript:void(0);" onClick={()=>changestatus(index,item.kot_id,3)} class="btn_approved">Approve</a></td>
    <td width="20%" ><a style={{"margin-left":"5px","background-color":"red"}} onClick={()=>changestatus(index,item.kot_id,2)} href="#" class="btn_approved">Reject</a></td>
  </tr>
</table>

</div>
))}
            {(pendingkot.length===0)? <Alerts type="info" message="No Data Yet!"/> : null}






</div>

















<div style={{width:'100%', height:'70px'}}></div></>
  );
};

export default PendingKot;
