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

    const toastError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  
  useEffect(() => {
    if (!error) return;

    switch (error.errorMessage) {
      case "User not found":
        dispatch(clearError());
        toastError("User not found!");
        break;
      case "Incorrect password":
        dispatch(clearError());
        toastError("Incorrect password!");
        break;
      default:
        break;
    }
  }, [error]);

  return (
    <WelcomePage>
      <Welcome />
      <LoginForm />
    </WelcomePage>
  );
};


export default WithNoAuthRedirect(Login, "/home");
// export default Login;
