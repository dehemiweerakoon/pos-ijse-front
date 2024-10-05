import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const ProtectedRoutes = () => {
    const token = sessionStorage.getItem('token');
    if(!token){
        return (
        <Navigate to={"/login"} replace/>
      )
    }
      return <><NavBar/> <Outlet/><Footer/> </>//
}

export default ProtectedRoutes