/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './NavBar.css'
import { Image,Offcanvas } from 'react-bootstrap'
import logo from '../../assests/2.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
 <>
  <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle rounded">
  <div className="container-fluid">
    <Image src={logo} thumbnail className='image'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" onClick={handleShow} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
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
        <Link className="nav-link" to={"/ps"} onClick={handleClose}>POS</Link>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
</nav>
 </>
  )
}

export default NavBar