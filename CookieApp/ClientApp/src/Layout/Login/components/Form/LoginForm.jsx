import { useState } from "react";
import { useDispatch} from "react-redux";
import { logIn } from "redux/userSlice";
import { Form, Label, Button, Input, Container, ButtonBlock, RedirectLink } from "common/common.styled";
import { toast } from 'react-toastify';

export const LoginForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);


    const handleChange = ({ target: { name, value } }) => {

         if (name === 'password') {
            if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            setPasswordInvalid(true);
            }
            else {
                setPasswordInvalid(false);
            }
        }
        
        switch (name) {
            case 'login':
                return setLogin(value.toLowerCase());
            case 'password':
                return setPassword(value);
            default:
                return;
        };
    };

    const onPassFocus = e => {
        if (e.target.value.length < 8 && e.target.value.length >= 1) {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const formData = {
            login,
            password,
        }
        
        dispatch(logIn(formData));
        setLogin('');
        setPassword('');
    };

    const pass = password.length < 8;

    return (
        <Container>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label>Login
                    <Input type="login" name='login' value={login} placeholder='cooker229' onChange={handleChange} required={true} />
                </Label>
                <Label passwordInvalid={passwordInvalid}>Password
                    <Input type="password" name='password' value={password} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onBlur={() => setPasswordInvalid(false)} onChange={handleChange} onFocus={onPassFocus} min={8} max={21} placeholder='Enter min 8 symbols' required={true} />
                </Label>
                <ButtonBlock>
                    <Button type="submit" disabled={isLoading || !login || pass}>LogIn</Button>
                    <RedirectLink to='/sign-up'>SignUp</RedirectLink>
                </ButtonBlock>
            </Form>
        </Container>
    )
}
