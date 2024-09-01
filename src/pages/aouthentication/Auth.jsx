import React,{createContext,useState,setState} from 'react';
import { BrowserRouter,createBrowserRouter, Route, Switch,RouterProvider,Outlet } from 'react-router-dom';
import { AppProvider } from './utils/Context';
import Header from './common/Header.jsx';
import FooterMobile from './common/FooterMobile.jsx';
import Registration from './Login.jsx';
import Login from './Registration.jsx';








const Layout = (props) => (
  
  <div>
    <Header {...props}  />
    <Outlet context={props} /> {/* This will render the current route's component */}
    <FooterMobile {...props} />
  </div>
);




const router = createBrowserRouter([
  {
    path: '/Auth',
    children: [
     
      { path: '/registration', element: <Registration /> },
      { path: '/login', element: <Login /> },
      
      // Add more routes here
    ],
  },
],{basename:"/"});



function Auth() {

  
  
  
  
  return (

    
    <AppProvider>
     <RouterProvider router={router}  />
     </AppProvider>

  
  

  
  
    
  );
}



export default Auth;