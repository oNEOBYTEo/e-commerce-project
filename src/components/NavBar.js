import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom'
import { doLogoutThunk } from '../redux/actions';

const NavBar = () => {

  const dispatch = useDispatch()

  const [ toggle, setToggle ] = useState(false);

  const logOut = () => {
    dispatch( doLogoutThunk() );
  };

  const close = () => {
    setToggle(false)
  }

  return ( 
    <nav>
      <div onClick={() => setToggle(!toggle)} className={toggle ? "toggle-active toggle" : "toggle"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className='navbar-tittle'>VICTORY</h1> 
      
      <section className={toggle ? 'navbar-container-items navbar-container-open' : "navbar-container-items "}>
        <Link className="items" to='/shop' onClick={close} >
          <i className="fas fa-store"></i>
          <p>Shop</p>
        </Link>
        <Link className="items" to='/cart' onClick={close}>
          <i className="fas fa-shopping-cart"></i>
          <p >Cart</p>
        </Link>
        <Link className="items" to='/orders' onClick={close} >
          <i className="fas fa-shopping-basket"></i>
          <p >My orders</p>
        </Link>
        <Link className="items" to='/about' onClick={close} >
          <i className="far fa-question-circle"></i>
          <p>About</p>
        </Link>
        <button className='navbar-button' onClick={logOut}>Log Out</button>
      </section>
    </nav>
  )
}
 
export default NavBar;