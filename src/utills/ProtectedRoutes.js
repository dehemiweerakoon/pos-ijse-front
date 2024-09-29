import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

const ProtectedRoutes = () => {
    const token = sessionStorage.getItem('token');
    if(!token){
        return (
        <Navigate to={"/login"} replace/>
      )
    }
      return <><NavBar/> <Outlet/> </>//
}

export default ProtectedRoutes