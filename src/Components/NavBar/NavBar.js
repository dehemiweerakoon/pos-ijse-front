/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './NavBar.css'
import { Image,Offcanvas } from 'react-bootstrap'
import logo from '../../assests/uu.webp'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
const NavBar = () => {

  const [show, setShow] = useState(false);

  const nav = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const getLogOut=()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("user_id")
        window.location.href = "/login";
  }

  return (
 <>
  <nav className="navbar navbar-expand-lg navbar-light -subtle shadow">
  <div className="container-fluid">
  <FaCartShopping onClick={()=>{nav("/home")}} className="text-primary fs-5"/> <span className='mx-3' type="button"  onClick={()=>{nav("/home")}}><h3>FreeCart</h3></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" onClick={handleShow} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/item"}>Items</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/category"}>Category</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/stock"}>Stock</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/pos"}>POS</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-primary" type="submit" onClick={getLogOut}>LogOut</button>
      </form>
    </div>
  </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/home"} onClick={handleClose}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/item"} onClick={handleClose}>Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/category"} onClick={handleClose}>Category</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/stock"} onClick={handleClose}>Stock</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/pos"} onClick={handleClose}>POS</Link>
        </li>
        <l1>
        <form className="d-flex">
        <button className="btn btn-outline-primary" type="submit" onClick={getLogOut}>LogOut</button>
      </form>
        </l1>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
</nav>
 </>
  )
}

export default NavBar