import axios from 'axios';
import { API_URL } from './constant'
import { toast } from 'react-toastify'; // Ensure to import toast if you are using it
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';




export const postData = (func, formData) => {
    axios.defaults.baseURL = API_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    
    return axios.post(`/${func}`, formData)
      .then(response => {
        if (response.data.status_code === 203) {
          toast.error(response.data.message);
        } else if (response.data.status_code === 200) {
          toast.success(response.data.message);
        } else if (response.data.status_code === 401) {
         
        }
  
        return response.data;
      })
      .catch(error => {
        //toast.error('There was an error!');
        return 0;
      });
  };


  export const getData = (func) => {
    axios.defaults.baseURL = API_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    
    return axios.get(`/${func}`)
      .then(response => {
        if (response.data.status_code === 203) {
          toast.error(response.data.message);
        } else if (response.data.status_code === 200) {
         
        } else if (response.data.status_code === 401) {
         
        }
  
        return response.data;
      })
      .catch(error => {
        //toast.error('There was an error!');
        return 0;
      });
  };

    
  export const usePostDataWithAuth = () => {
    const dispatch = useDispatch();
    const token = useSelector(state=>state.login); // Ensure token is being correctly retrieved from your state
  
    const postDataWithAuth = (func,formData) => {
      // Log the token for debugging purposes
      //console.log('Token:', token);
  
      axios.defaults.baseURL = API_URL;
      
      axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      axios.defaults.headers.common['Authorization'] = token; // Ensure the token is prefixed by "Bearer "
  
      return axios.post(`/${func}`,formData)
        .then(response => {
          if (response.data.status_code === 203) {
            //alert();
            // toast.error(response.data.message);
            toast.error(response.data.message || 'An error occurred.');
            //toast.error(message || 'An error occurred.');
          } else if (response.data.status_code === 200) {

            toast.success(response.data.message);

           
          } else if (response.data.status_code === 401) {
            // Unauthorized, possibly logout
            //console.warn('Unauthorized, logging out');
            dispatch(actionCreators.setlogout());
          }
          return response.data;
        })
        .catch(error => {
          console.error('There was an error!', error);
          return 0;
        });
    };
  
    return { postDataWithAuth };
  };

  



  export const useGetDataWithAuth = () => {
    const dispatch = useDispatch();
    const token = useSelector(state=>state.login); // Ensure token is being correctly retrieved from your state
  
    const getDataWithAuth = (func) => {
      // Log the token for debugging purposes
      console.log('Token:', token);
  
      axios.defaults.baseURL = API_URL;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['Authorization'] = token; // Ensure the token is prefixed by "Bearer "
  
      return axios.get(`/${func}`)
        .then(response => {
          if (response.data.status_code === 203) {
            // toast.error(response.data.message);
            console.error(response.data.message);
          } else if (response.data.status_code === 200) {
            // Handle success
            console.log('Success:', response.data);
          } else if (response.data.status_code === 401) {
            // Unauthorized, possibly logout
            //console.warn('Unauthorized, logging out');
            dispatch(actionCreators.setlogout());
          }
          return response.data;
        })
        .catch(error => {
          console.error('There was an error!', error);
          return 0;
        });
    };
  
    return { getDataWithAuth };
  };
