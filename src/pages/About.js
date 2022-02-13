import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/about.css'

const About = () => {

  const products = useSelector(state => state.product.productsList)

  return ( 
    <section className="page-about-container">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima consequuntur nulla, ex iste neque debitis dignissimos. Saepe, repellendus nostrum distinctio explicabo nihil, incidunt quos alias, corrupti quaerat aliquam eius.
      Provident exercitationem error nostrum fugiat neque. Qui blanditiis accusantium ea magnam beatae dolores non atque? Id tempora ut nemo numquam, quisquam fuga voluptate? Quae deserunt placeat ipsa aperiam praesentium consequatur!
      Tempore ea minus quas nesciunt excepturi assumenda explicabo maxime, ipsum nulla pariatur eligendi modi optio. Optio repudiandae voluptatem, ullam ducimus porro, minima eaque vero atque voluptates facere doloremque harum eligendi.
      Ducimus pariatur exercitationem sequi corrupti consequuntur. Eum veniam, quaerat quod porro molestiae expedita modi ad illum quae nihil reiciendis aliquam officiis, quidem ex sed voluptas obcaecati distinctio eligendi? Commodi, quasi?
      Nisi quae nam modi necessitatibus unde, totam inventore consectetur neque quas minus reprehenderit praesentium voluptate recusandae eaque animi, repudiandae cupiditate ad asperiores saepe, a esse at similique. Quod, enim consequuntur.</p>
      <div className="about-images-container">
        <img src={products?.[1]?.images?.[1]?.url} alt="product" />
        <img src={products?.[18]?.images?.[1]?.url} alt="product" />
        <img src={products?.[14]?.images?.[1]?.url} alt="product" />
      </div>
    </section>
   );
}
 
export default About;