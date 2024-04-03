import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsListContainer from "./components/ProductsListContainer/ProductsListContainer";
import Cart from "./components/Cart/Cart";
import ProductsProvider from "./context/productsContext";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsListContainer />} />
          <Route path='/shop' element={<ProductsListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:productId' element={<ProductDetailContainer />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
