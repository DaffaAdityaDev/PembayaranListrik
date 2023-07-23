import React from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className='login--form'>
        <h1 className='login--form__title'>Login</h1>
        <div className='login--form__line' />
        <p className='login--form__text'>Login to your account</p>
        <form className='login--form__form'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='login--inputgroup--text'>
              <img src='Email.svg' alt='Email' className='login--form__form--icon' />
            </InputGroup.Text>
            <Form.Control className='login--form__form--input' type="text" placeholder="Username" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className='login--inputgroup--text'>
              <img src='Email.svg' alt='Email' className='login--form__form--icon' />
            </InputGroup.Text>
            <Form.Control className='login--form__form--input' type="password" placeholder="Password" />
          </InputGroup>

          <Link className='register--form__link' to='/dashboard' > 
            <Button variant="primary" className='login--button'>Daftar</Button>{' '} 
          </Link>
          
        </form>

        <p>
          Belum Punya akun?
          <Link className='login__link' to='/register'> Daftar </Link>
        </p>
      </div>
    </div>
  )
}

export default Login