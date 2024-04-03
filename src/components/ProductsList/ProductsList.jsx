import ProductCard from "../ProductsCard/ProductCard";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className='ProductsList'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
