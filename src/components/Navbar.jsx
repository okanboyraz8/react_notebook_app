import React from 'react'
import { Link } from 'react-router-dom'

import { useLogout } from '../hooks/useLogout'

import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {

    const { logout } = useLogout();

    const { user } = useAuthContext();

  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h3>The Best Notebook</h3>
                <h3>For Journaling in 2023</h3>
            </Link>
            <nav>
                {!user && (<div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)}
                {user && (<div>
                    <span>{user.displayName}</span> &nbsp;
                    <button onClick={logout}>Logout</button>
                </div>)}
            </nav>
        </div>
    </header>
  )
}
