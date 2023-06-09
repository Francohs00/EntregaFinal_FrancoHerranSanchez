import './App.css';
import Main from './components/main';
import Itemlistcontainer from './components/Itemlistcontainer';
import Footer from './components/footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Header from './components/header';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Itemlistcontainer />} />
          <Route path={"/category/:id"} element={<ItemDetailContainer />} />
          <Route path={"/main"} element={<Main />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
