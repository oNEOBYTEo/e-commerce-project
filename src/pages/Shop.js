import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsThunk, getCategoriesThunk, filterCategoryThunk, filterHeadlineThunk  } from '../redux/actions';
import '../styles/shop.css'


const Shop = () => {
  const dispatch = useDispatch();
  

  const products = useSelector(state => state.product.productsList)
  const categories = useSelector(state => state.categories)

  const [ search, setSearch ] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch] );

  const filterCategory = id => dispatch(filterCategoryThunk(id));

  const filterHeadline = e => {
    e.preventDefault();
    dispatch(filterHeadlineThunk(search));
  }

  console.log()

  return ( 
    <main className='shop-container'>
     
      <h2>Shop</h2>
      <ul className='shop-buttons-container'>
          <li >
            <button className='button-item' onClick={() => dispatch(getProductsThunk())}>All</button>
            
          </li>
        {
          categories.map(category => (
            <li key={category.id}>
              <button className='button-item' onClick={() => filterCategory(category.id) }>{category.name}</button>
            </li>
          ))
        }
      </ul>
      <form className="shop-form" onSubmit={filterHeadline} >
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Type to search" />
                <button>Search</button>
            </form>
      <section>

        
          
        <ul className='container-cards'>

        {products.length === 0 && (
          <li style={{ color: "#78716c" ,marginTop: "20vh"}}>
            <i style={{fontSize: "4rem", marginBottom: "1rem"}} className="far fa-question-circle"></i>
            <h2>Not products found</h2>
          </li>
        )}

          {
            products?.map(product => (
              <li style={{listStyle: "none"}} key={product.id}>
              <Link onClick={() => window.scrollTo(0,0)} className="card-jewel" to={`/shop/${product.id}`}>
                <img src={product?.images?.[0]?.url} alt='product' />
                <img className="hidden" src={product?.images?.[1]?.url} alt='product' />
                <p>{product.name}</p>
              </Link>
        
            </li>
            ))
          }
        </ul>
      </section>
    </main>
   );
}
 
export default Shop;