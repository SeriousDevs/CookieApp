import { signUp } from "redux/userSlice";
import {
  Form,
  Label,
  Button,
  Input,
  Container,
  RedirectLink,
  ButtonBlock,
  LabelCheckbox,
} from "common/common.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const SignUpForm = ({ isLoading }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "password") {
      if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
        setPasswordInvalid(true);
      } else {
        setPasswordInvalid(false);
      }
    }

    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "login":
        return setLogin(value.toLowerCase());
      default:
        return;
    }
  };

  const onPassFocus = (e) => {
    if (e.target.value.length < 8 && e.target.value.length >= 1) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8 && login.length < 1 && email.length < 3) return;
    const formData = {
      login,
      email,
      password,
    };

    dispatch(signUp(formData));

    setLogin("");
    setEmail("");
    setPassword("");
  };

  const pass = password.length < 8;

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          {" "}
          Login{" "}
          <Input
            type="text"
            name="login"
            value={login}
            onChange={handleChange}
            placeholder="cooker229"
            required={true}
          />
        </Label>
        <Label>
          {" "}
          Email{" "}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required={true}
          />
        </Label>
        <Label passwordInvalid={passwordInvalid}>
          {" "}
          Password{" "}
          <Input
            type={`${checked ? "text" : "password"}`}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            name="password"
            value={password}
            onFocus={onPassFocus}
            onBlur={() => setPasswordInvalid(false)}
            onChange={handleChange}
            min={8}
            max={21}
            placeholder="Enter min 8 symbols"
            required={true}
          />
        </Label>
        <LabelCheckbox>
          <input
            type="checkbox"
            name="check"
            onChange={() => setChecked((p) => !p)}
          />
          Check password
        </LabelCheckbox>
        <ButtonBlock>
          <Button
            type="submit"
            disabled={isLoading || !login || !email || pass}
          >
            Register
          </Button>
          <RedirectLink to="/login">LogIn</RedirectLink>
        </ButtonBlock>
      </Form>
    </Container>
  );
};
