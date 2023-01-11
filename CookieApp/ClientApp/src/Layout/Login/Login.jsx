import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { LoginForm } from "./components/Form/LoginForm";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to='/sign-up'>SignUp</Link>
      <LoginForm/>
    </div>
  )
}

export default WithNoAuthRedirect(Login, '/home');
// export default Login;

