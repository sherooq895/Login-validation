import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


function Login() {

  const [passwordEye, setPasswordEye] = useState(true);

  const [password, setPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (email == '') {
      setEmailError('Email is required');
    } else {
      const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      if (!emailRegex.test(email)) {
        setEmailError('Invalid email');
      } else {
        setEmailError('');
      }
    }
  };

  const validatePassword = () => {
    if (email == '') {
      setPasswordError('Password is required');
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{10,16}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError('Password must be 10-16 characters long and contain at least one uppercase letter, one lowercase letter, one digit, one special symbol, and no whitespace.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className='logo'></div>

        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
        {emailError && <div className="error">{emailError}</div>}

        <div className='password'>
          <label htmlFor="password">Password</label>
          <input type={passwordEye ? "password" : "text"} id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required />
          <button type='button' className='icon' onClick={() => setPasswordEye(!passwordEye)}>
            {
              passwordEye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
            }
          </button>
        </div>
        {passwordError && <div className="error">{passwordError}</div>}


        <div className='rememberme'>
          <input type="checkbox" id='rememberme' name='rememberme' />
          <label htmlFor="rememberme">Remember Me</label>
        </div>

        <button className='login-btn' type='submit'> Login <FaLongArrowAltRight className='icon' /> </button>
      </form>
    </div>
  )
}

export default Login