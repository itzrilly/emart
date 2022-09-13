import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exac path='/' element={<Home/>} />
        <Route exac path='/products' element={<Products/>} />
        <Route exac path='/products/:id' element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;
