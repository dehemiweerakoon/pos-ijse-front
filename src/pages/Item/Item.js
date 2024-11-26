/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { Button, Col, Container,Modal,Form } from 'react-bootstrap'
import Table  from 'react-bootstrap/Table'
import { getRequest } from '../../services/ApiServices'
import ItemAdd from '../ItemAdd/ItemAdd'
import axios from 'axios'

const Item = () => {
const [items,setItems] = useState([]);
const [show, setShow] = useState(false);
const [image,setImage]= useState([]);
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

const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () =>{
     setShow2(true);
  } 

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
  const respnose = await axios.put(`http://localhost:9000/items/${updateItem.id}`,data);
  handleClose();
  console.log(respnose);
  window.location.reload()
 }
 const getImage =async() =>{
 console.log("")
  try {
    const newImages = [] // Create an array to hold the image URLs

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const name = `${item.name}.png`;
      const response = await axios(`http://localhost:9000/file/${name}`, { responseType: 'blob' });
      newImages.push(URL.createObjectURL(response.data)); // Push the new image URL to the array
    }

    // After all images are fetched, update the state in one go
    setImage(newImages);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
 }
 useEffect(() => {
  if (items.length > 0) {
    getImage(); // Fetch images only after items are updated
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [items]); 
useEffect(()=>{
  getAllItems();
  getAllCategories();
},[])

const getItemDeleted = async(id)=>{
 
  try {
     const respnose = await axios.delete(`http://localhost:9000/items/${id}`);
    if(respnose){
      handleShow2();
      window.location.reload();
      // the window should load after the data load then we have to wait till the movement // 
      
    }
  } catch (error) {
    console.error("error deleting the item");
  }
}

  return (
   <>
   <Container>
    <Col sm={12}>
   <a style={{textDecoration: 'none'}} href={"#items"}>  <h2 >Add Items</h2></a>
    <Table striped bordered hover className='mt-3' responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
          <th>Category</th>
          <th>image</th>
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
          <td><img src={image[index]} alt="hw" width="100px"/></td>
          <td><Button onClick={()=>{handleShow(); setUpdateItem(null); setUpdateItem(item)}}>Update</Button></td>
          <td><Button onClick={()=>{getItemDeleted(item.id)}}>Delete</Button></td>
          </tr>
            )
          })
        }
        
      </tbody>
    </Table>
    </Col>
    <Col sm={12} md={6}>
    <div className="shadow rounded p-4 bg-info mb-5 " id='items'>
       <h2>Add Items</h2>
    <ItemAdd data={categories}/>
    </div>
   
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
      <option>Select the category</option>
      
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
      </Modal>


      <Modal show={show2} onHide={handleClose2} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Body>Successfully deleted Item !</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Item