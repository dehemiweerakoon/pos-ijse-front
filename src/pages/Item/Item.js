/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { Button, Col, Container,Modal,Form,Dropdown } from 'react-bootstrap'
import Table  from 'react-bootstrap/Table'
import { getRequest, postRequest } from '../../services/ApiServices'
import Category from '../Category/Category'
import { Link } from 'react-router-dom'


const Item = () => {
const [items,setItems] = useState([]);
const [show, setShow] = useState(false);
const [updateItem,setUpdateItem] = useState({
  id: 1,
  name: "Smartphone",
  price: 699.99,
  itemCategory: {
      id: 1,
      name: "Electronics"
  }
})
const [price,setPrice] = useState(0.0);
const [categories,setCategories] = useState([]);
const [newCategory,setNewCategory]= useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllCategories = async()=>{
    const respnose = await getRequest("/categories");
    setCategories(respnose.data);
  }

  const handlePrice = (event)=>{
   setPrice(event.target.value);
  }
  const handleCategory =(event)=>{
    setNewCategory(event.target.value);
  }
const getAllItems = async()=>{
 
  const respnose = await getRequest("/items");
   setItems(respnose.data);
}
const handleSubmit =async(event)=>{
  event.preventDefault();
  const data ={
    id: updateItem.id,
    name : updateItem.name,
    price : price===0.0?updateItem.price:price,
    itemCategory:{
          id: newCategory===0?updateItem.itemCategory:parseInt(newCategory)
    }
  }
  console.log(data);
  const respnose = await postRequest("/items",data);
  console.log(respnose);
 }

useEffect(()=>{
  getAllItems();
  getAllCategories();
},[])

  return (
   <>
   <Container>
    <Col sm={12}>
   <Link style={{textDecoration: 'none'}}>  <h2 >Add Items</h2></Link>
    <Table striped bordered hover className='mt-3 table-primary' responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          items && items.map((item,index)=>{
            return(
              <tr key={index}>
          <td >{item.name}</td>
          <td>${item.price}</td>
          <td>{item.itemCategory.name}</td>
          <td><Button onClick={()=>{handleShow(); setUpdateItem(null); setUpdateItem(item)}}>Update</Button></td>
          <td><Button>Delete</Button></td>
          </tr>
            )
          })
        }
        
      </tbody>
    </Table>
    </Col>
   </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item id :{updateItem.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={updateItem.name} disabled />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" step={0.01} placeholder={updateItem.price} value={price} onChange={handlePrice}/>
      </Form.Group>

      <Form.Select aria-label="Default select example" onChange={handleCategory} value={newCategory}>
      <option>Open this select menu</option>
      
    {
      categories && categories.map((category,index)=>{
        return(
          <option value={category.id}>{category.name}</option>
        )
      })
    }
    </Form.Select>
    <Button variant="primary" onClick={handleSubmit} className='mt-4'>
           Save Changes
          </Button>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Item