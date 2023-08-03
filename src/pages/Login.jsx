import React, { useState } from 'react'

import { useLogin } from '../hooks/useLogin'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, error, pending } = useLogin();

    const handleSubmit = async (e) => {

        e.preventDefault();
        //console.log("email, password", email, password);

        await login(email, password);
    }

  return (
    <>
    <form className='login' onSubmit={handleSubmit}>
        <h3>NOTEBOOK LOGIN PAGE</h3>

        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

        {!pending && <button>Login</button>}
        {pending && <button disabled>processing...</button> }
        {
          error && <div className='error'>{error}</div>
        }
    </form>
    </>
  )
}
