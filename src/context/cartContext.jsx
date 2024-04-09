import { useContext, useState, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    // Sumarle la cantidad recida al producto recibido en caso de que este ya en el carrito
    if (cart.some((item) => item.product.id == product.id)) {
      const cartChanged = cart.map((item) => {
        if (item.product.id == product.id) {
          item.quantity += quantity;
        }
        return item;
      });

      return setCart(cartChanged);
    }

    // Agregar el item completo al carrito, ya que no existe producto con su id dentro
    setCart([
      ...cart,
      {
        quantity,
        product,
      },
    ]);
  };

  const deleteProductFromCart = (id) => {
    setCart(cart.filter((item) => item.product.id != id));
  };

  const deleteAllFromCart = () => {
    setCart([]);
  };

  const changeQuantityToProduct = (id, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.product.id == id) {
          item.quantity = quantity;
        }
        return item;
      })
    );
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductFromCart,
        deleteAllFromCart,
        changeQuantityToProduct,
        getTotal,
        getTotalItems,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
