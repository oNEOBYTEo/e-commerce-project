import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrdersThunk } from "../redux/actions";
import '../styles/myOrders.css'

const MyOrders = () => {

  const dispatch = useDispatch();
  const myOrders = useSelector(state => state.myOrders);

  useEffect(() => dispatch(getMyOrdersThunk()),[dispatch])

  return ( 
    <section className="my-orders-container">
      <h2>My orders</h2>
      <ul className="order-list-container">
        {
          myOrders.map(order => (
            <li key={order.id} className='item-purchased'>
              <img src={order?.product?.images?.[0]?.url} alt="orden-product" />
              <p>
                {order?.product?.name}
              </p>
              <p>
              <span>Quantity: </span>{order?.quantity}
              </p>
              <p style={{marginRight: "1rem"}}>
                <span>Purchase Date: </span>{order?.purchase_date}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
   );
}
 
export default MyOrders;