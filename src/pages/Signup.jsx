import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {error, pending, signup} = useSignup();

    const handleSubmit = async (e) => {

        e.preventDefault();
        //console.log("username, email, password, confirmPassword", username, email, password, confirmPassword);

        if(password===confirmPassword){
          signup(email, password, username);
        }else{
          alert("Passwords do NOT match")
        }
    }

  return (
    <>
    <form className='signup' onSubmit={handleSubmit}>
        <h3>NOTEBOOK MEMBERSHIP PAGE</h3>

        <label>Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />

        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

        <label>Enter Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

        <label>Reenter Password:</label>
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

        {!pending && <button>Signup</button>}
        {pending && <button disabled>processing...</button>}
        {
          error && <div className='error'>{error}</div>
        }
    </form>
    </>
  )
}
