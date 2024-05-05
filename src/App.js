import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAllProducts from './components/ViewAllProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct />} />
        <Route path='/search' element={<SearchProduct />} />
        <Route path='/view' element={<ViewAllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
