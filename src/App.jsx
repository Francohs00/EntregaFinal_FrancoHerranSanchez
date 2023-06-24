import './App.css';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Main from './components/main';
import Itemlistcontainer from './components/Itemlistcontainer';
import Footer from './components/footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Header from './components/header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Itemlistcontainer />} />
            <Route path={"/category/:id"} element={<Itemlistcontainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/main"} element={<Main />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;