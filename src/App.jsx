import './App.css';
import Itemlistcontainer from './components/Itemlistcontainer';
import Cartwidget from './components/cartwidget';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='container-fluid'>
      <Header/>
      <Navbar/>
      <Cartwidget/>
      <Itemlistcontainer/>
      <Main/>
      <Footer/>
    </div>
  ); 
}

export default App;
