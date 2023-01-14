import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { WelcomePage } from "Layout/common/common.styled";
import { Welcome } from "Layout/common/components/Welcome/Welcome";
import { LoginForm } from "./components/Form/LoginForm";

const Login = () => {
  return (
    <WelcomePage>
      <Welcome/>
      <LoginForm/>
    </WelcomePage>
  )
}

export default WithNoAuthRedirect(Login, '/home');
// export default Login;

