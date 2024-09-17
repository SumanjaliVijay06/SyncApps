import React from 'react'
import {useState} from 'react'
import backgroundImage from './Images/land_image.jpg'
import { FaGoogle, FaApple} from 'react-icons/fa'

const Login = () => {

  const [fullName, setFullName] = useState('');
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let userDetails = {
      fullName:fullName,
      input:input,
      password:password,
    } 
    console.log(userDetails)

    if(password !== confirmPassword) {
      setErrorMessage("Password do not match")
    }
    else{
      console.log("Password Submitted:", password)
      setErrorMessage("")
    }
  }

  return (
    <div className='login-container'>
    <div className='left-container' style={{backgroundImage:`url(${backgroundImage})`, width:'50%', height:'100vh'}}>
    <h1 className='main-heading'>Discover your <br/> perfect plot</h1>
    <p className='main-content'>
      Explore the possibilities and uncover your perfect plot with <br/>
      us. Whether it's a serene countryside retreat, an urban oasis,<br/>
      or a picturesque piece of wilderness, our platform is your key<br/>
      to finding the ideal land. Start your journey now, and let the <br/>
      discovery of your dream property begin!
    </p>
    </div>
    
    <div className='form-container'>
      <form className='login-form' >
        <h1 className='create-heading'>Create your Account</h1>
        <p className='signup-content'>Signup to the realm of endless land possibilities</p>
        <label htmlFor='userName'>Fullname</label>

        <input
          className='input-content'
          type='text'
          name='fullName'
          id="fullName"
          value={fullName}
          placeholder='FullName'
          onChange={handleFullNameChange}
        />
        <label>Email/Mobile Number</label>
        <input
          className='input-content'
          type="text"
          id="input"
          value={input}
          placeholder='Email/Mobile Number'
          onChange={handleInputChange}
        />
        <label>Set Password</label>
        <input
          className='input-content'
          type='password'
          id="password"
          value={password}
          placeholder='6 characters, 1 Capital Letter'
          onChange={handlePasswordChange}
        />
        <label>Confirm Password</label>
        <input 
          className='input-content'
          type='password'
          id="confirmPassword"
          value={confirmPassword}
          placeholder='6 characters, 1 Capital Letter' 
          onChange={handleConfirmPasswordChange}
        />
        <div className='checkbox-container'>
        <input
        className='checkbox'
          type='checkbox'
          id='checkbox'
        />
        <label htmlFor='checkbox' className='checkbox-label'>I agree to the <span>Terms & Policy</span></label>
        
        </div>
       <button className='button' type='submit' onSubmit={handleSubmit}>Signup</button>
      </form>
      <div className='connect-container'>
      <button className='connect-button'><FaGoogle size={30}/>Login with Google</button>
      <button className='connect-button'>
 
      <FaApple size={35}/>Login with Apple</button>

      </div>
      
      <p className='account'>Already have an account? <span>Login</span></p>
      </div>
      
    </div>
  )
}

export default Login
