import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutFromAcc } from "redux/gameAccSlice";
import { logOut } from "redux/userSlice";
import { LogOutButton } from "./Logout.styled";

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    dispatch(logOutFromAcc());
    navigate("/login");
  };

  return (
    <LogOutButton type="button" onClick={handleOnClick}>
      Logout
    </LogOutButton>
  );
};
