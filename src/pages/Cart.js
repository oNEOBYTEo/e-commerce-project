import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getCartThunk } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCartThunk()),[dispatch]);

  const cartProducts = useSelector( state => state.cart);


   console.log(cartProducts)
  return ( 
    <section>
      <ul>
        {
          cartProducts?.map( cart => <li key={cart.id} > 
          <p>
            {cart?.product?.name}
          </p>
          <img style={{width: '300px'}} src={cart?.product?.images?.[0]?.url} alt="product" />
          </li>)
        }
      </ul>
    </section>
   );
}
 
export default Cart;