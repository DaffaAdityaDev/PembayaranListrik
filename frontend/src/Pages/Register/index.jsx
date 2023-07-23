import React from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './Register.css'

function Register() {
  return (
    
    <div className='register'>
        <div className='register--form'>
            <h1 className='register--form__title'>register</h1>
            <div className='register--form__line' />
            <p className='register--form__text'>register to your account</p>
                <form className='register--form__form'>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='register--inputgroup--text'>
                        <img src='Email.svg' alt='Email' className='register--form__form--icon' />
                    </InputGroup.Text>
                    <Form.Control className='register--form__form--input' type="text" placeholder="Username" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='register--inputgroup--text'>
                        <img src='Email.svg' alt='Email' className='register--form__form--icon' />
                    </InputGroup.Text>
                    <Form.Control className='register--form__form--input' type="password" placeholder="Password" />
                    </InputGroup>

                    <Link className='register--form__link' to='/dashboard' > 
                        <Button variant="primary" className='login--button'>Daftar</Button>{' '} 
                    </Link>
                </form>
            <p>
                Sudah Punya akun?
                <Link className='register__link' to='/login'> Login </Link>
            </p>
        </div>
    </div>
  )
}

export default Register