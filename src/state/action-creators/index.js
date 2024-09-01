
export const setlogin = (token) => async (dispatch) => {
    try {
        localStorage.setItem("token_canteen_admin", token)

      // Your logic here, e.g., saving the token or making an API call
      dispatch({ type: 'login', payload: token });
      
      // Return a resolved promise
      return Promise.resolve();
    } catch (error) {
      // Return a rejected promise
      return Promise.reject(error);
    }
  };

  export const setlogout = () => async (dispatch) => {

   // alert()
   try {
    

  // Your logic here, e.g., saving the token or making an API call
  dispatch({ type: 'logout', payload: "" });
  
  // Return a resolved promise
  return Promise.resolve();
} catch (error) {
  // Return a rejected promise
  return Promise.reject(error);
}

};

export const setuserdetail = (userdetail) => async (dispatch) => {

  // alert()
  try {
   //console.log("assasasas"+userdetail)
    localStorage.setItem("userdetail", userdetail)
 // Your logic here, e.g., saving the token or making an API call
 dispatch({ type: 'setdetail', payload: userdetail });
 
 // Return a resolved promise
 return Promise.resolve();
} catch (error) {
 // Return a rejected promise
 return Promise.reject(error);
}

};