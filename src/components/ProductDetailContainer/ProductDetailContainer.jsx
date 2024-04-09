import { useParams } from "react-router-dom";
import "./ProductDetailContainer.css";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/productsContext";
import ProductDetail from "../ProductDetail/ProductDetail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      <div className='ProductDetailNavigation'>
        <p className='ProductDetailNavigationSection'>Home</p>
        <ArrowForwardIosIcon />
        <p className='ProductDetailNavigationSection'>Shop</p>
        <ArrowForwardIosIcon />
        <p className='ProductDetailNavigationProduct'>{product && product.title}</p>
      </div>
      {!product ? (
        <div className='loader'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
}

export default ProductDetailContainer;
