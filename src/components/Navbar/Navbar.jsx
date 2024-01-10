import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  
    const [menu, setMenu] = React.useState("shop")
    const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>ShopLychee</p>
    </div> 
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><NavLink style={{textDecoration:"none", color:"black"}} to='/'>Shop</NavLink>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><NavLink style={{textDecoration:"none", color:"black"}} to='/mens'>Men</NavLink>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><NavLink style={{textDecoration:"none", color:"black"}} to='/womens'>Women</NavLink>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><NavLink style={{textDecoration:"none", color:"black"}} to='/kids'>Kids</NavLink>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to='/login'><button>Login</button></NavLink>      
        <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}