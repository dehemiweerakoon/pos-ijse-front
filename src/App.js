import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import './App.scss';
import ProtectedRoutes from './utills/ProtectedRoutes';
import Item from './pages/Item/Item';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
function App() {
  return (
    <div className="App">    
      <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/item' element={<Item/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
