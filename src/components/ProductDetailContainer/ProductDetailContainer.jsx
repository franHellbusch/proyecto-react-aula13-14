import { useParams } from "react-router-dom";
import "./ProductDetailContainer.css";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/productsContext";
import ProductDetail from "../ProductDetail/ProductDetail";

function ProductDetailContainer() {
  const { getProductById } = useProductsContext();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getById = async () => {
    const prod = await getProductById(productId);
    setProduct(prod);
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className='ProductDetailContainer'>
      {!product ? (
        <div class='loader'>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
        </div>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
}

export default ProductDetailContainer;
