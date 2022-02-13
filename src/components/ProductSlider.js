
import '../styles/productSlider.css'

const ProductSlider = ({product, position, setPosition}) => {

  const itemWidth =  100 / product?.length

  const imagesListStyle = {
    width: product?.length * 100 + "%",
    transform: `translateX(-${itemWidth * (position - 1)}%)`
  }

  return ( 
    <div className="slider-container">
      <div className="product-images">
        <div style={imagesListStyle} className="product-images-list">
          {
            product?.map( image => (
            <div key={image.url} className="image-item">
              <img src={image.url} alt="product" />
            </div>
            ))
          }
        </div>
        <div className="shopDetail-buttons-slider">
          <button onClick={() => setPosition(position - 1)} disabled={position === 1 && true}>{"<"}</button>
          <button onClick={() => setPosition(position + 1)} disabled={position === product?.length && true} >{">"}</button>
        </div>
      </div>
    </div>
   );
}
 
export default ProductSlider;