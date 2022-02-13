import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ProductSlider } from '../components';
import { addCartThunk, filterCategoryThunk, getProductDetailThunk } from '../redux/actions';
import '../styles/shopDetail.css'

const ShopDetail = () => {

  const [ position, setPosition ] = useState(1);
  const [ quantity, setQuantity ] = useState(1);
  const [ notification, setNotificantion ] = useState(false)
  const { id } = useParams();

  const dispatch = useDispatch()
  
  useEffect( () => {
    dispatch(getProductDetailThunk(id))
  }, [dispatch, id])
  
  const product = useSelector(state => state.product.productDetail)
  const producstList = useSelector(state => state.product.productsList)

  useEffect(() => {
    if(product.category){
        dispatch(filterCategoryThunk(product.category?.id));
    }
  }, [ dispatch, product ]);

  const addCart = () => {

    const cart = {
      product: product.id,
      quantity: quantity
    }
    setNotificantion(true)
    setTimeout(() => setNotificantion(false), 2000)
    dispatch(addCartThunk((cart)))
  } 

  

  return ( 
    <main className="shopDetail-container">
      <section className="shopDetail-product">
        <h1>{product.name}</h1>
        <ProductSlider product={product?.images} position={position} setPosition={setPosition} />  
        <p className="p1"><span>Description:</span> {product.description}</p>
        <p className='p2'><span>Price:</span> ${product.price}</p>
        {
          notification && (
            <div className="notification">
              <p>Product added to cart</p>
            </div>
          )
        }
        <div className='container-purchase-buttons'>
          <div>
              <button onClick={() => setQuantity(quantity- 1)} disabled={quantity === 1 && true}>-</button>
              <p>{quantity}</p>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button onClick={addCart}>Add Cart</button>
        </div>
      </section>
      
      <ul className="related-products-list">
        {
          producstList.map(product => (
            <li className='related-item' key={product.id}>
              <Link className="related-product" 
                onClick={() => {
                  setPosition(1)
                  window.scrollTo(0,0)
                }} 
                to={`/shop/${product.id}`}
              >
                <img className="relase-image" src={product?.images?.[0]?.url} alt="product" />
                <img className="hidden" src={product?.images?.[1]?.url}  alt="product" />
                <p>{product.name}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </main>
   );
}
 
export default ShopDetail;