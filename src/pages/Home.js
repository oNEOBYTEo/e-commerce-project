import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../redux/actions'
import '../styles/home.css'

const Home = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const Num = () => Math.floor(Math.random() * 23);
  
  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch] )
  
  const products = useSelector(state => state.product.productsList)

  return ( 
    <main className="home">
      <img className="home-image" src={ products?.[Num()]?.images?.[0]?.url} alt="product" />
      <section className='home-container'>
        <h1 className="home-tittle">VICTORY</h1>
        <p className="home-paragraph">Perfection for you</p>
        <button className="home-login" onClick={() => navigate("/login")}>Login</button>
      </section>
      <section className="about-container">
        <h2 className="about-tittle">About Us</h2>
        <p className='about-paragraph'>We are an e-commerce in charge of the sale of high quality products, entirely jewelry, to please the high tastes of our clientele.</p>
      </section>
      <section className="demonstrative-images">
        <img  src={products?.[1]?.images?.[2]?.url} alt="product" />
        <img  src={products?.[7]?.images?.[4]?.url} alt="product" />

      </section>
    </main>
   );
}
 
export default Home;