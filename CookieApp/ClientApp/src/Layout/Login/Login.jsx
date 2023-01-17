import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { WelcomePage } from "common/common.styled";
import { Welcome } from "common/components/Welcome/Welcome";
import { LoginForm } from "./components/Form/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getErrorUser } from "redux/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(getErrorUser);
  
  useEffect(() => {
    if (!error) return;
    dispatch(clearError());
    toast.error("Incorrect login or password!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }, [error]);

  return (
    <WelcomePage>
      <Welcome/>
      <LoginForm/>
    </WelcomePage>
  )
}

export default WithNoAuthRedirect(Login, '/home');
// export default Login;

