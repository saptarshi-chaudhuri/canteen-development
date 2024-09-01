//const initialState = {}; // Define your initial state, it could be an object, array, or any value based on your requirement

const reducer = (state ='', action) => {
  switch (action.type) {
    case "setdetail":

    //console.log("wqwqwqwqwqwqw"+action.payload);
      return action.payload; // Update the state with the new payload

    default:
      return state; // Return the current state if no action matches
  }
};

export default reducer;