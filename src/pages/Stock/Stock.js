import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Table,Modal,Form } from 'react-bootstrap'
import { getRequest } from '../../services/ApiServices';
import axios from 'axios';
import StockAdd from '../StockAdd/StockAdd';

const Stock = () => {
    const [qty ,setQty] = useState(0);
    const [message,setMessage] = useState("");
    const [updateStock,setUpdateStock] =  useState({
      id:0,
      item:{
        id:0,
        name:"",
        price:0,
        itemCategory:{
          id:0,
          name:""
        }
      },
      quantity:0
    });

    const [stocks,setStock] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getAllStock = async()=>{
        const response = await getRequest("/stock");
        setStock(response.data);
    }
    const handleUpdate = async()=>{
      const  data ={
        id:updateStock.id,
        item:{
          id:updateStock.item.id,
          name:updateStock.item.name,
          price:updateStock.item.price,
          itemCategory:{
            id:updateStock.item.itemCategory.id,
            name:updateStock.item.itemCategory.name
          }
        },
        quantity:qty
      }
      const respnose = await axios.put(`http://localhost:9000/stock/${updateStock.id}`,data);
      if(respnose.data!=null){
        setMessage("Updated Successfully");
      }
      window.location.reload();
    }

    useEffect(()=>{
     getAllStock();
    },[])

  return (
    <>
    <Container>
     <Col>
     <a href='#stock' style={{textDecoration: 'none'}} className='mt-2'><h2>Add Stock</h2></a>
      <Table striped bordered hover className='mt-3' responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Item price</th>
          <th>Item Category</th>
          <th>quantity</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {
            stocks && stocks.map((stock,index)=>{
                return(
                    <>
                    <tr key={index}>
                    <td>{index}</td>
                    <td>{stock.item.name}</td>
                    <td>${stock.item.price}</td>
                    <td>{stock.item.itemCategory.name}</td>
                    <td>{stock.quantity}</td>
                    <td><Button onClick={()=>{handleShow();setUpdateStock(stock);setQty(stock.quantity)}}>Update</Button></td>
                    </tr>
                    </>
                )
            })
        }
        
      </tbody>
    </Table>
     </Col>
     <Col sm={12} md={6}>
     <div className="shadow rounded p-4 bg-info mb-5 " id='items'>
      <StockAdd/>
      </div>
     </Col>
    </Container>
    
    <Modal show={show}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Stock id :{updateStock.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleUpdate}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="name" value={updateStock.item.name}  disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" step={0.01} value={updateStock.item.price} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="qty">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" step={0.01} value={qty} onChange={(event)=>{setQty(event.target.value)}} placeholder={updateStock.quantity}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="category" value={updateStock.item.itemCategory.name}  disabled/>
      </Form.Group>
    {
       <p>{message}</p>
    }
    <Button variant="primary"  className='mt-4' onClick={handleUpdate}>
           Save Changes
          </Button>
    </Form>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Stock