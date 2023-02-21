import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutFromAcc } from "redux/gameAccSlice";
import { logOut } from "redux/userSlice";
import { LogOutButton, LogOutIcon } from "./Logout.styled";
import { useMediaQuery } from "react-responsive";  

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTabScreen = useMediaQuery({ query: "(max-width: 1279.97px)" });
  const isDescScreen = useMediaQuery({ query: "(min-width: 1279.98px)" });
  
  const handleOnClick = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    dispatch(logOutFromAcc());
    navigate("/login");
  };

  return (<>
    {isDescScreen && <LogOutButton type="button" onClick={handleOnClick}>
      Logout
    </LogOutButton>}
    {isTabScreen && <LogOutButton type="button" onClick={handleOnClick}>
      <LogOutIcon/>
    </LogOutButton>}
  </>
  );
};
