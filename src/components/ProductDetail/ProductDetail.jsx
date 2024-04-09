import "./ProductDetail.css";

function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetail;
