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
  <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle rounded">
  <div class="container-fluid">
    <Image src={logo} thumbnail className='image'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" onClick={handleShow} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/item"}>Items</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/home"} onClick={handleClose}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/item"} onClick={handleClose}>Items</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Category</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
</nav>
 </>
  )
}

export default NavBar