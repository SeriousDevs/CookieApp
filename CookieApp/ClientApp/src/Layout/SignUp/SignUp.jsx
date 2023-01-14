import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { Welcome } from "Layout/common/components/Welcome/Welcome";
import { SignUpForm } from "./components/Form/SignUpForm";
import { WelcomePage } from "Layout/common/common.styled";

const SignUp = () => {
  return (
    <WelcomePage>
      <Welcome/>
      <SignUpForm />
    </WelcomePage>
  )
}

// export default SignUp;
export default WithNoAuthRedirect(SignUp, '/home');
