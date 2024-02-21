import React from 'react'
import logo from  '../Assets/logo.png'
import cart from  '../Assets/cart_icon.png'
import './Navbar.css'
import { useState } from 'react' 
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu,setMenu]=useState("shop");
  return (
<div className='navbar'>
<div className="nav-logo">
<img src={logo}></img>
<p>Myntra</p>
</div>
  <ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
  </ul>
  <div className="nav-login-cart">
  <Link to='/login'><button>Login</button></Link>
  <Link to='/cart'><img src={cart}></img></Link>
    <div className="nav-cart-count">0</div>
  </div>
  </div>
  )
}

export default Navbar
