import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <nav className='nav-bar'>
      <div className='nav-container'>
      <header>LandZ App</header>
        <ul className='nav-menu'>
        <Link to='/properties' className='nav-link'>
            <li className='nav-list'>Property Listing<select>
              <options></options>
            </select>
            </li>
            </Link>
            <Link to='/postproperty' className='nav-link'>
            <li className='nav-list'>PostProperty</li>
            </Link>
            <Link to='/blog' className='nav-link'>
            <li className='nav-list'>Blog</li>
            </Link>
            <Link to='/about' className='nav-link'>
            <li className='nav-list'>About</li>
            </Link>
            <Link to='/contact' className='nav-link'>
            <li className='nav-list'>Contact</li>
            </Link>
            <Link to="/signup" className="nav-link">
            <li><button  className='button signup-button'  type='button'>Signup</button></li>
            </Link>
            <Link to="/login" className="nav-link">
            <li > <button className='login-button'  type='button'>Login</button></li>
            </Link>  
        
        </ul>
        </div>
      </nav>
    
  )
}

export default Header
