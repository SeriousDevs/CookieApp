// import { login } from "redux/userSlice";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Form, Label, Button, Input, Container } from "Layout/common/common.styled";


export const LoginForm = ({ isLoading }) => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
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
            case 'email':
                return setEmail(value);
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
            email,
            password,
        }
        console.log(formData);

        // dispatch(login(formData));
        setEmail('');
        setPassword('');
    };

    const pass = password.length < 8;

    return (
        <Container>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label>Email
                    <Input type="email" name='email' value={email} placeholder='example@gmail.com' onChange={handleChange} required={true} />
                </Label>
                <Label passwordInvalid={passwordInvalid}>Password
                    <Input type="password" name='password' value={password} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} onFocus={onPassFocus} onBlur={() => setPasswordInvalid(false)} min={8} max={21} placeholder='Enter min 8 symbols' required={true} />
                </Label>
                <Button type="submit" disabled={isLoading || !email || pass}>LogIn</Button>
            </Form>
        </Container>
    )
}
