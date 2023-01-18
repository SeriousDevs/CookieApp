import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { WelcomePage } from "common/common.styled";
import Welcome from "common/components/Welcome/Welcome";
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
    if (error.errorMessage === 'User not found') {
      dispatch(clearError());
      toast.error('User not found!', {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if (error.errorMessage === 'Incorrect password') {
      dispatch(clearError());
      toast.error('Incorrect password!', {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
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

