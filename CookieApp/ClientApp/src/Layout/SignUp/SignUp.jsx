import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { SignUpForm } from "./components/Form/SignUpForm";

const SignUp = () => {
  return (
    <div>
          <SignUpForm/>
    </div>
  )
}

export default SignUp;
// export default WithNoAuthRedirect(SignUp, '/home');