 const reducer=(states="",action)=>{

    if(action.type==="login")
        {
            return states=action.payload;
        }
        else if(action.type==="logout")
            {
                //alert("Logout")
                localStorage.removeItem('token_canteen_admin');

                return states="";

               

               


            }

            else
            {
                return states;
            }

}


export default reducer