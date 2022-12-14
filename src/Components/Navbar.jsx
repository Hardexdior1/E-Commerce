import React from 'react'
import '../Styles/Navbar.css'
import carticon from '../imagesfolder/shopping.jpg'
import{Link} from"react-router-dom";
const Navbar = ({cart}) => {
  return (
    <div className='Navbar'>
      <Link to='/' className='link'>Hardex Store </Link>
      
      <Link to='/Cart' className='cart'> <img className='cart-icon' src={carticon} alt="" /> {cart.length}</Link>

    </div>
  )
}

export default Navbar