import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { SignUpForm } from "./components/Form/SignUpForm";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <Link to='/login'>LogIn</Link>
      <SignUpForm />
    </div>
  )
}

// export default SignUp;
export default WithNoAuthRedirect(SignUp, '/home');
