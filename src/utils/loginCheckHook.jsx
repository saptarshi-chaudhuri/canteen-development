import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';


export const PrivateRoute = ({ children }) => {
  const login=useSelector(state=>state.login);
  

  const dispatch=useDispatch();

  //console.log(login);

  if(login==="" || login===undefined || localStorage.getItem("token_canteen_admin")===null)
    {
      if(localStorage.getItem("token_canteen_admin")===null)
        {
      var  isAuthenticated = false;
        }
        else
        {
          //alert(localStorage.getItem("userdetail"));
          dispatch(actionCreators.setlogin(localStorage.getItem("token_canteen_admin")))
          dispatch(actionCreators.setuserdetail(localStorage.getItem("userdetail")))
          var  isAuthenticated = true;
        }
    }
    else
    {
      var isAuthenticated = true;
    }

 

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const login=useSelector(state=>state.login);

  const dispatch=useDispatch();

  //console.log(login);

  if(login==="" || login===undefined || localStorage.getItem("token_canteen_admin")===null)
    {
      if(localStorage.getItem("token_canteen_admin")===null)
        {
      var  isAuthenticated = false;
        }
        else
        {
          dispatch(actionCreators.setlogin(localStorage.getItem("token_canteen_admin")))
          var  isAuthenticated = true;
        }
    }
    else
    {
      var isAuthenticated = true;
    }

 

  return !isAuthenticated ? children: <Navigate to="/home/dashboard" />;
};

