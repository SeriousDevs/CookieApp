import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import Welcome from "common/components/Welcome/Welcome";
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
    if (error.errorMessage === 'The user with same Login is also created!') {
      dispatch(clearError());
      toast.error('A user with this Login is already registered!', {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    if (error.errorMessage === 'The user with same Email is also created!') {
      dispatch(clearError());
      toast.error('A user with this Email is already registered!', {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
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
