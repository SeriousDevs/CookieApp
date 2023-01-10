import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { LoginForm } from "./components/Form/LoginForm";

const Login = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

// export default WithNoAuthRedirect(Login, '/home');
export default Login;

