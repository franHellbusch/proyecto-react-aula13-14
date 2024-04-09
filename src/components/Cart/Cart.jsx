import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartTable from "../CartTable/CartTable";
import "./Cart.css";

function Cart() {
  const { getTotal, getTotalItems } = useCartContext();

  return (
    <div className='Cart'>
      <CartTable />
      <div className='CartTotals'>
        <h3>Cart Totals</h3>
        <div className='CartTotalsInfoQuantity'>
          <p>Quantity</p>
          <span>{getTotalItems()}</span>
        </div>
        <div className='CartTotalsInfoTotal'>
          <p>Total</p>
          <span>${getTotal()}</span>
        </div>
        <Link className='CartCheckoutButton' to='/checkout'>
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
