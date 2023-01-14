import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logOut } from "redux/userSlice";

export const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClick = () => {
        localStorage.removeItem('token');
        dispatch(logOut());
        navigate('/login');
    }
    
  return (
    <button type="button" onClick={handleOnClick}>Logout</button>
  )
}
