import { useState } from "react";
import "./ProductDetail.css";
import { useCartContext } from "../../context/cartContext";

function ProductDetail({ product }) {
  const { addProductToCart } = useCartContext();
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className='ProductDetail'>
      <img src={product.image} alt={product.title} />
      <div className='ProductDetailContent'>
        <div className='ProductDetailInfo'>
          <h2>{product.title}</h2>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <div className='ProductDetailCounter'>
          <div className='ProductDetailCounterContainer'>
            <button onClick={removeCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
          </div>
          <button onClick={() => addProductToCart(product, count)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
