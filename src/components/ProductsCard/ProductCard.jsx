import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='ProductCard'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <span>${product.price}</span>
      <div className='ProductCardHover'>
        <div className='ProductCardHoverBackground'></div>
        <Link to={`/product/${product.id}`}>View Detail</Link>
      </div>
    </div>
  );
}

export default ProductCard;
