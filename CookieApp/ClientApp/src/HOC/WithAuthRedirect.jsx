import { getUser } from "redux/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function WithAuthRedirect (Component, navigateTo) {
    const ComponentWithRedirect = props => {
        const user = useSelector(getUser);
        return !!user ? <Component {...props} /> : <Navigate to={navigateTo}/>
    }
    return ComponentWithRedirect;
}

export default WithAuthRedirect;
