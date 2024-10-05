import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import './App.scss';
import ProtectedRoutes from './utills/ProtectedRoutes';
import Item from './pages/Item/Item';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Stock from './pages/Stock/Stock';
import Pos from './pages/Pos/Pos';
function App() {
  return (
    <div className="App">    
      <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/item' element={<Item/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/stock' element={<Stock/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/pos' element={<Pos/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
