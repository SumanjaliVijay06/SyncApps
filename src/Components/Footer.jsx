import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='top-container'>
      <h1 className='footer-heading'> Visited this property?</h1>
      <p className='footer-content'>We'd love to hear about your experience. Please take a moment to share your thoughts.</p>
      <button className='submit-feedback' type='submit'> Submit Feedback</button>
    </div>
    <div className='details-container'>
      
    <table className='table'>
      <tr className='row-heading'>
        <th>Property Listing</th>
        <th>Company</th>
        <th>Resources</th>
        <th>Social</th>
        <th>Legal</th>
      </tr>
      <tr className='row-content'>
        <td>Residential properties</td>
        <td>Home</td>
        <td>Blog</td>
        <td>Twitter</td>
        <td>Terms</td>
      </tr>
      <tr className='row-content'>
        <td>Commercial properties</td>
        <td>About Us</td>
        <td>Newsletter</td>
        <td>LinkedIn</td>
        <td>Privacy</td>
      </tr>
      <tr className='row-content'>
        <td>Plots</td>
        <td>Contact</td>
        <td>Help center</td>
        <td>Facebook</td>
        <td>Cookies</td>
      </tr>
      <tr className='row-content'>  
        <td>Farmlands</td>
        <td></td>
        <td>Support</td>
        <td></td>
        <td>Licenses</td>
        
      </tr>
      <tr>
        <td>Industrial properties</td>
      </tr>
    </table>
    <hr/>
    <p className='copy-rights'>&copy;2024 LandZ. All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
