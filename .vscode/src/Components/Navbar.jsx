import React from 'react'
import '../Styles/Navbar.css'
import{Link} from"react-router-dom";
const Navbar = ({cart}) => {
  return (
    <div className='Navbar'>
      <Link to='/' className='link'>Hardex Store </Link>
      
      <Link to='/Cart' className='cart'>Cart:{cart.length}</Link>

    </div>
  )
}

export default Navbar