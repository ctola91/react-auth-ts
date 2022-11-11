import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';

type Props = {}

const Login = (props: Props) => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signIn({ email, password });
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
            <div>Login</div>
            <form onSubmit={handleOnSubmit}>
                <label>Email</label>
                <input type="text" value={email} name="email" onChange={handleOnChange} />
                <label>Password</label>
                <input type="password" value={password} name="email" />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login;
