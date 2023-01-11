import { getUser } from "redux/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function WithNoAuthRedirect(Component, navigateTo){
    const ComponentWithRedirect = props => {
        const user = useSelector(getUser);
        return !!user ? <Navigate to={navigateTo}/> : <Component {...props} /> 
    }
    return ComponentWithRedirect;
}

export default WithNoAuthRedirect;
