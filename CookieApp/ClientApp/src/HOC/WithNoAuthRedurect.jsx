import { getToken} from "redux/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { memo } from "react";


function WithNoAuthRedirect(Component, navigateTo){
    const ComponentWithRedirect = props => {
        const token = useSelector(getToken);
        return !!token ? <Navigate to={navigateTo}/> : <Component {...props} /> 
    }
    return ComponentWithRedirect;
}

export default WithNoAuthRedirect;
