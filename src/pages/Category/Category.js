import React, { useEffect, useState } from 'react'
import { Container, Table, Col, Button,Form,Modal } from 'react-bootstrap'
import { getRequest } from '../../services/ApiServices';
import axios from 'axios';
import CategoryAdd from '../CategoryAdd/CategoryAdd';
const Category = () => {


  const [categories,setCategories] = useState([]);
  const [updatecategory,setUpdateCategory] = useState({
    id:0,
    name:""
  });
  const [name,setName] = useState("");
  const [show, setShow] = useState(false);
  const [message,setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllCategory = async()=>{
    const respnose = await getRequest("/categories");
    setCategories(respnose.data);
  }
 const handleSubmit = async(event)=>{
    event.preventDefault();
    const data = {
      id: updatecategory.id,
      name: name===""?updatecategory.name:name
    }
    const response = await axios.put(`http://localhost:9000/categories/${updatecategory.id}`,data);
    console.log(response);
    if(response.data!=null){
      setMessage("Successfully updated");
    }
    handleClose();
    window.location.reload();
 }

  useEffect(()=>{
    getAllCategory();
  },[])
  return (
    <>
    <Container>
      <Col>   
      <a style={{textDecoration: 'none'}} href={"#category"}>  <h2 >Add Categories</h2></a>
      <Table responsive="sm" className='mt-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Update</th>
            <th>Delete</th>
      
          </tr>
        </thead>
        <tbody>
          {
            categories && categories.map((category,index)=>{
              return(
            <tr>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td><Button onClick={()=>{handleShow();setUpdateCategory(category)}}>Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
              )
            })
          }
        
        </tbody>
      </Table>
      </Col>
      <Col sm={12} md={6}>
    <div className="shadow rounded p-4 bg-primary-subtle mb-5  " id='category'>
       <h2>Add category</h2>
       <CategoryAdd/>
       </div>
      </Col>
    </Container>
   
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Category id :{updatecategory.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={updatecategory.name} value={name} onChange={(event)=>{setName(event.target.value)}}/>
      </Form.Group>

    <Button variant="primary"  className='mt-4'onClick={handleSubmit}>
           Save Changes
          </Button>
    </Form>
      <p>{message}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Category