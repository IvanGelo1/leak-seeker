import '../css/welcomepage.css';
import React from 'react';
import logo from '../images/logo.png'

const Navbar: React.FC = () => {
  return (
    <div className='navbar-cont glass' data-testid='navbar'>
      <section className='navbar-left'>
      <img className='navbar-logo-img' src={logo} alt='brand logo'/>
        <h1>LeakSeeker</h1>
      </section>
      <section className='navbar-right'>
         <a className='navbar-right-item' href='x'>Home</a>
         <a className='navbar-right-item' href='x'>About</a>
         <a className='navbar-right-item' href='x'>Contact</a>
         <button className='navbar-right-item login-btn' type="button">Login</button>
      </section>
    </div>
  )
}

export default Navbar