import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

type Props = {}

const Login = (props: Props) => {
    const auth = useAuthContext();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        auth?.signIn({ email, password });
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
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="text" value={email} name="email" onChange={handleOnChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <input type="password" value={password} name="password" onChange={handleOnChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                <input type="submit" value="Login" className="mt-10 mb-10 rounded p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" />
            </form>
        </>
    )
}

export default Login;
