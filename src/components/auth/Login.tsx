import { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { redirect } from 'react-router-dom';

type Props = {}

import './Login.css';

const Login = (props: Props) => {
    const auth = useAuthContext();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await auth.signIn({ email, password });
            redirect('/');
        } catch (e) { console.log(e) };
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value, name },
        } = event;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }

    return (
        <>
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <label className="login-form-label">Email</label>
                    <input type="text" value={email} name="email" onChange={handleOnChange} className="form-input" />
                    <label className="login-form-label">Password</label>
                    <input type="password" value={password} name="password" onChange={handleOnChange} className="form-input" />
                    <input type="submit" value="Login" className="form-button" />
                </form>
            </div>
        </>
    )
}

export default Login;
