import { useCartContext } from "../../context/cartContext";
import "./CartTable.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CartTable() {
  const { cart, changeQuantityToProduct, deleteProductFromCart, deleteAllFromCart } =
    useCartContext();

  return (
    <table className='CartTable'>
      <thead>
        <tr>
          <td></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>SubTotal</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr className='CartTableItem'>
            <td>
              <img
                className='CartTableItemImage'
                src={item.product.image}
                alt={item.product.title}
              />
            </td>
            <td>{item.product.title}</td>
            <td>${item.product.price}</td>
            <td>
              <div className='CartTableCounterContainer'>
                <button
                  onClick={() =>
                    item.quantity > 1 && changeQuantityToProduct(item.product.id, item.quantity - 1)
                  }>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantityToProduct(item.product.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </td>
            <td className='CartTableItemSubtotal'>${item.quantity * item.product.price}</td>
            <td>
              <button
                onClick={() => deleteProductFromCart(item.product.id)}
                className='CartTableItemDeleteButton'>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan='6'>
            <button className='CartTableDeleteAllButton' onClick={deleteAllFromCart}>
              Delete All
            </button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartTable;
