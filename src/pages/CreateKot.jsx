import {React,useEffect,useState} from "react";
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
import { usePostDataWithAuth } from "../utils/Api";
import { getData} from "../utils/Api";
import Alerts from "../common/Alerts";


const CreateKot = () => {
    const { postDataWithAuth } = usePostDataWithAuth();
    const [studentlist, setstudentlist] = useState({
        value: '',
        label: ''
      });
      const [menuquantity, setmenuquantity] = useState([{
        value: '1',
        label: '1'
      },{
        value: '2',
        label: '2'
      },{
        value: '3',
        label: '3'
      },{
        value: '4',
        label: '4'
      },{
        value: '5',
        label: '5'
      },{
        value: '6',
        label: '6'
      },{
        value: '7',
        label: '7',
      }]);
      const [selectedstudent, setselectedstudent] = useState("");
      const [selectstudetlabel, setselectstudetlabel] = useState("No Student Selected");
      const [menuitems, setmenuitems] = useState([]);
      const [singlemenu_item, setsinglemenu_item] = useState("");
      const [singlequantity, setsinglequantity] = useState("");
      const [selectedmenuitems, setselectedmenuitems] = useState([]);
      const [total, settotal] = useState(0);

      const setitemtolist=()=>{

        if(singlemenu_item!="" && singlequantity!="")
            {
                setselectedmenuitems((prevmenuitem) => [...prevmenuitem, {menu:singlemenu_item.split("|")[2],quantity:singlequantity,amount:parseInt(singlemenu_item.split("|")[1])*parseInt(singlequantity),menu_id:singlemenu_item.split("|")[0]}]);
                setsinglemenu_item("");
                setsinglequantity("");
                settotal(parseInt(total)+parseInt(singlemenu_item.split("|")[1])*parseInt(singlequantity));
               // setFormData((prevmenuitem)=>{})
            }

           
        


        
        

      }


    useEffect(() => {

        getData('Authrjs/getallstudents')
          .then(response => {
    
            //console.log(response.data.category_data);
    
            setstudentlist(response.data.student_data);
    
            //console.log(menuitems)
          
          })
          .catch(error => {
           
          });


          getData('Authrjs/allmenuwithprice')
          .then(response => {
    
            //console.log(response.data.category_data);
    
            setmenuitems(response.data.menu_data);
    
            //console.log(menuitems)
          
          })
          .catch(error => {
           
          });
    
    
          
    
    
    
          
    
         
        
      }, []);

      const submitkot= async()=>{
       
        const updatedMenuItems = [...selectedmenuitems, { student_id: selectedstudent }];

        // Update the state
        //setselectedmenuitems(updatedMenuItems);
      
        // Now make the API call with the updated state
        try {
          const response = await postDataWithAuth("Authrjs/addkot", updatedMenuItems);
          if(response.status_code==200)
            {
                setTimeout(window.location.reload(), 2000);
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
<h5>Create KOT</h5>

<div class="search_section">
<table border="0" cellspacing="0" cellpadding="4" width="100%">
  <tr>
    <td>
    <Select options={studentlist} class="form-control" placeholder="Search Student ID" onChange={(values) => {setselectedstudent(values[0].value); setselectstudetlabel(values[0].label);}} />

        </td>
    {/* <td width="40"><a class="fxt-btn-fill" href="#" style={{padding: '10px 10px'}}><i class="fas fa-search fa-fw"></i></a></td> */}
  </tr>
</table>
<div class="student_dashboard_main_inner" style={{'font-size': '14px',  'font-weight': 'bold'}}>{selectstudetlabel}</div>

<table border="0" cellspacing="0" cellpadding="4" width="100%" class="kot_menu">
  <tr>
    <td width="300">
    <label>Choose Menu</label>
    <Select options={menuitems} class="form-control" placeholder="Search Menu" onChange={(values) => {setsinglemenu_item(values[0].value)}} />
</td>
    <td> <label>Qty</label>
    <Select options={menuquantity} class="form-control" placeholder="Search Menu" onChange={(values) => {setsinglequantity(values[0].value)}} /></td>
    <td width="40">
    <label style={{width:'100%'}}>&nbsp;</label>
    <a class="fxt-btn-fill" onClick={setitemtolist} href="javascript:void(0)" style={{padding: "10px 10px"}}><i class="fas fa-plus fa-fw"></i></a></td>
  </tr>
</table>

<div class="payment_kot_list kot_menu_list">
<table border="0" cellspacing="0" cellpadding="4" width="100%">
  <tbody><tr>
    <td width="75%"><strong>Menu</strong></td>
    <td width="15%"><strong>Qty</strong></td>
    <td><strong>Amount</strong></td>
  </tr>

  {selectedmenuitems.map((item, index) => (
  <tr key={index}>
    <td width="75%">{item.menu} </td>
    <td width="15%">{item.quantity} </td>
    <td><strong>{item.amount}</strong></td>
  </tr>
  ))}
   {selectedmenuitems.length === 0 ? (
          <Alerts type="info" message="No Data Yet!" />
        ) : (
          <tr >
          <td width="75%" colspan="2"><strong>Total</strong></td>
          
          <td><strong>{total}</strong></td>
        </tr>
        )}
  
</tbody></table>

</div>

<table width="100%" border="0" cellspacing="0" cellpadding="4" class="mt-20">
  <tr>
    <td align="center"><a class="fxt-btn-fill" href="javascript:void(0)" onClick={submitkot}>Submit</a></td>
    <td align="center"><a class="fxt-btn-fill" onClick={()=>{setselectedmenuitems([])}} href="javascript:void(0);">Cancel</a></td>
  </tr>
</table>



</div>





</div>
















<div style={{width:'100%', height:'70px'}}></div>
    
    
    </>
  );
};

export default CreateKot;
