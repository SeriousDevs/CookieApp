import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { Welcome } from "common/components/Welcome/Welcome";
import { SignUpForm } from "./components/Form/SignUpForm";
import { WelcomePage } from "common/common.styled";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getErrorUser } from "redux/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
 const dispatch = useDispatch();
  const error = useSelector(getErrorUser);
  
  useEffect(() => {
    if (!error) return;
    dispatch(clearError());
    toast.error("We alredy have user with this email or login", {
      position: toast.POSITION.TOP_RIGHT
    });
  }, [error]);

  return (
    <WelcomePage>
      <Welcome/>
      <SignUpForm />
    </WelcomePage>
  )
}

// export default SignUp;
export default WithNoAuthRedirect(SignUp, '/home');
