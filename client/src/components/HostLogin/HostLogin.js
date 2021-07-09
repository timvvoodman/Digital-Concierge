import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HostLogin.css'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import API from '../../utils/axios'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

function HostLogin(props) {
  ///STATE DEFININITIONS////
  const form = useRef()
  const checkBtn = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  ///////////

  ///STATE FUNCTIONS///
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(setEmail)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      API.login(email, password).then(
        () => {
          props.history.push('/home')
          window.location.reload()
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setLoading(false)
          setMessage(resMessage)
        }
      )
    } else {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <h1>Login to Access Host Features</h1>

      <Form onSubmit={handleLogin} ref={form} className="login-form">
        <Input
          className="login-form-input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          validations={[required]}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Email')}
        ></Input>

        <Input
          className="login-form-input"
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Password')}
        ></Input>
        <button className="login-button" type="submit" disabled={loading}>
          Submit
        </button>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>

      <div className="create-account-link">
        <p>New Host?</p>
        <Link to="/register" className="register-link">
          Create Account
        </Link>
      </div>
    </div>
  )
}

export default HostLogin
