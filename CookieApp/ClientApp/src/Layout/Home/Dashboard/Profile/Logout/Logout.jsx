import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logOutFromAcc } from "redux/gameAccSlice";
import { logOut } from "redux/userSlice";

export const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClick = () => {
        localStorage.removeItem('token');
        dispatch(logOut());
        dispatch(logOutFromAcc());
        navigate('/login');
    }
    
  return (
    <button type="button" style={{cursor: 'pointer'}} onClick={handleOnClick}>Logout</button>
  )
}
