import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShopping} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import Cart from './Cart';

const Navbar = () => {
  const [carts, setCart] = useState(false);
  const items = useSelector(state=>state.cart);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" style={{textDecoration: "none", fontSize: "30px"}}>Shopee</Link>
        </div>
        <div className='icons'>
          {items.length >= 1 && <span className='badge'>{items.length}</span>}
          <AiOutlineShopping className='icon' onClick={()=>setCart(true)}/>
        </div>
      </div>
      {carts && <Cart cartItems={items} setCart={setCart} />}
    </div>
  )
}

export default Navbar