import React, { useState, useRef } from 'react'
import './Register.css'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

function Register(props) {
  ///STATE///
  const form = useRef()
  const checkBtn = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')
  ///////////

  ///STATE FUNCTIONS///
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    setMessage('')
    setSuccessful(false)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      API.register(email, password).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
          setSuccessful(false)
        }
      )
    }
  }

  return (
    <div className="register-container">
      <h1>Enter Your Information to Register Your Account</h1>

      <Form onSubmit={handleRegister} ref={form} className="register-form">
        {!successful && (
          <>
            <Input
              className="register-form-input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Email')}
            ></Input>
            <Input
              className="register-form-input"
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Password')}
            ></Input>

            <button className="login-button" type="submit">
              Submit
            </button>
          </>
        )}
      </Form>
    </div>
  )
}

export default Register
