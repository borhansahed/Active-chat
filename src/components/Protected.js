import auth from "../firebase-init";
import { Navigate } from "react-router-dom";


const Protected = ({children}) => {


const user = auth.currentUser;
console.log(auth.currentUser);
if(!user){
    return <Navigate to={'/login'} replace></Navigate>
}

return children;
   
};

export default Protected;