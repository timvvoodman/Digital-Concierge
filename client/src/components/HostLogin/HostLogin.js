import React from 'react'
import { Link } from 'react-router-dom'
import './HostLogin.css'

function HostLogin() {
  return (
    <div className="login-container">
      <h1>Login to Access Host Features</h1>
      <div className="login-form">
        <form>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Email')}
          ></input>

          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Password')}
          ></input>
        </form>
        <button className="login-button" type="submit">
          Submit
        </button>
        <div className="create-account-link">
          <p>New Host?</p>
          <Link to="/register" className="register-link">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HostLogin
