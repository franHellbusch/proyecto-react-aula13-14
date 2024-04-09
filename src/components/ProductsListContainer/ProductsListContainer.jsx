import { useEffect } from "react";
import { useProductsContext } from "../../context/productsContext";
import "./ProductsListContainer.css";
import ProductsList from "../ProductsList/ProductsList";

function ProductsListContainer() {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='ProductsListContainer'>
      <h2>Our Products</h2>
      {products.length == 0 ? (
        <div class='loadingspinner'>
          <div id='square1'></div>
          <div id='square2'></div>
          <div id='square3'></div>
          <div id='square4'></div>
          <div id='square5'></div>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default ProductsListContainer;
