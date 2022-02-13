import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { buyCartThunk, getCartThunk, removeCartThunk, removeProductCartThunk } from '../redux/actions';
import '../styles/cart.css'

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCartThunk()),[dispatch]);

  const cartProducts = useSelector( state => state.cart);

  const deleteProductCart = id => {
    dispatch(removeProductCartThunk(id));
  }
  const buyCart = cart => {
    if(cartProducts?.[0]?.id)
      dispatch(buyCartThunk(cart))
  }

  return ( 
    <section className="cart-container">
      <h2>Cart</h2>
      <ul className="my-orders-list">
        {
          cartProducts?.map( cart => (
          <li className='order-item' key={cart.id} > 
            <img src={cart?.product?.images?.[0]?.url} alt="product" />
            <p>
              {cart?.product?.name}
            </p>
            <p>
              <span>Quantity: </span>{cart?.quantity}
            </p>
            <button onClick={() => deleteProductCart(cart.id)}>Remove</button>
          </li>
          ))
        }
      </ul>
      <div className="cart-buttons">
        <button onClick={() => dispatch(removeCartThunk())}>Remove Cart</button>
        <button onClick={() => buyCart(cartProducts)}>Buy Cart</button>
      </div>
    </section>
   );
}
 
export default Cart;