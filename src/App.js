import React,{createContext,useState,setState} from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/css/main_style.css';
import { BrowserRouter,createBrowserRouter, Route, Switch,RouterProvider,Outlet } from 'react-router-dom';
import { AppProvider } from './utils/Context';
import Header from './common/Header.jsx';
import HeaderLogin from './common/HeaderLogin.jsx';
import FooterMobile from './common/FooterMobile.jsx';
import UndeliveredOrder from './pages/UndeliveredOrder.jsx';

// aouthentication
import Registration from './pages/aouthentication/Registration.jsx';
import Login from './pages/aouthentication/Login.jsx';
import {PrivateRoute,PublicRoute} from './utils/loginCheckHook.jsx'; // Adjust the path as necessary


// main pages
import PendingKot from './pages/PendingKot.jsx';
import OrderDetail from './pages/OrderDetail.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import CreateKot from './pages/CreateKot.jsx';
import Homepage from './pages/Homepage.jsx';
import Detailspage from './pages/Detailpage.jsx';
import MenuList from './pages/MenuList.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



let sharedProps = {
  user: 'John Doe',
  mode: "Dark",
};




const Layout = (props) => (
  
  <div>
    <HeaderLogin {...props}  />
    <Outlet context={props} /> 
   
  </div>
);

const LayoutHome = (props) => (
  
  <div className="main_section" style={{ background: 'none', padding: '0px', border: '1px solid #eee' }}>
    <Header {...props}  />
    <Outlet context={props} /> 
    <FooterMobile {...props} />
  </div>
);

const changemodehandler=()=>{

  

  sharedProps.mode="Light";
  
  //alert(sharedProps.mode)
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute><Layout {...sharedProps} changemode={changemodehandler} /></PublicRoute>,
    children: [
      // { path: '/', element: <SplashScreen /> },
      { path: '/', element: <Login /> },
      
      { path: '/details', element: <Detailspage /> },
     
      { path: '/registration', element: <Registration /> },
      { path: '/login', element: <Login /> },
      
     
    ],
  },
  {
    path: '/home',
    element:  <PrivateRoute><LayoutHome {...sharedProps} changemode={changemodehandler} /></PrivateRoute>,
    children: [
      
      { path: 'dashboard', element: <Homepage /> },
      { path: 'MenuList', element: <MenuList /> },
      { path: 'CreateKot', element: <CreateKot /> },
      { path: 'PendingKot', element: <PendingKot /> },
      { path: 'UndeliveredOrder', element: <UndeliveredOrder /> },
      { path: 'OrderHistory', element: <OrderHistory /> },
      { path: 'OrderDetail/:id', element: <OrderDetail /> }
     
     
      
      
    ],
  }
],{basename:"/canteen/admin"});



function App() {

  
  
  
  
  return (

    
    <AppProvider>
      <ToastContainer />
     <RouterProvider router={router}  />
     </AppProvider>

  
  

  
  
    
  );
}



export default App;
