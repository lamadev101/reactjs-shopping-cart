import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '../context/stateContext';

const Navbar = () => {
  const [carts, setCart] = useState(false);
  const {cartItem, state} = useStateContext();
  const {cart} = state;

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" style={{textDecoration: "none", fontSize: "30px"}}>LamaShop</Link>
        </div>
        <div className='icons'>
          {cartItem >= 1 && <span className='badge'>{cartItem}</span>}
          <AiOutlineShopping className='icon' onClick={()=>setCart(true)}/>
        </div>
      </div>
      {carts && <Cart setCart={setCart} cart={cart} />}
    </div>
  )
}

export default Navbar