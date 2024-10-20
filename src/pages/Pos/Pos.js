import React, { useEffect, useState } from 'react'
import { Col, Container,Form,Button, Table } from 'react-bootstrap'
import { getRequest, postRequest } from '../../services/ApiServices';



const Pos = () => {

  const [items,setItems]= useState();
  const user_id = sessionStorage.getItem('user_id');
  const [item_id,setItem_id] = useState(0);
  const [carts,setCarts] = useState({
    id: user_id,
    cartItems:[],
    totalAmount:0
  });
  const [quantity,setQuantity] =useState(0);

const getAllItems =async()=>{
  const respnose = await getRequest("/items");
   setItems(respnose.data);
   
}
const getAllCartItems=async()=>{
 // console.log(user_id);
  const respnose = await getRequest(`/${user_id}/cart`);
  //console.log(respnose.data);
  setCarts(respnose.data);
}
const handleChange=(event)=>{
   setItem_id(event.target.value);
}
useEffect(()=>{
     getAllItems();
     getAllCartItems();
},[])

const createCart = async(event)=>{
  event.preventDefault();
  const save_cart = {
    id: parseInt(user_id),
    cartItems:{
      item:{
        id: parseInt(item_id),
      }
    },
    quantity:parseInt(quantity)
  }
  //console.log(save_cart);
  const respnose = await postRequest(`/${user_id}/addItem/${item_id}/${quantity}`);
  window.location.reload();
}

const onPurchace =async()=>{
 
  const respnose = await postRequest(`/buy/${user_id}`)
  //console.log(respnose);
  window.location.reload();
}

  return (
   <>
     <Container>
     <Col md={6}>
     <Form className='mt-5'>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select"> Item</Form.Label>
          <Form.Select id="Select" onChange={handleChange}>
            {
              items && items.map((item,index)=>{
                return(
                  <>
                  <option value={item.id}>{item.name}</option>
                  </>
                )
              })
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">quantity</Form.Label>
          <Form.Control type='number' onChange={(event)=>{setQuantity(event.target.value)}} value={quantity} id="TextInput" placeholder=" quantity" />
        </Form.Group>
        <Button type="submit"onClick={createCart}>Add to Cart</Button>
    </Form>
     </Col>
     <Col className='mt-5'>
     <h1>Cart</h1>
       <Table striped bordered hover className='mt-3 table-primary' responsive>
        <thead>
          <tr> 
            <th>Item category</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qty</th>
          </tr>
        </thead>
        <tbody>
        {carts.cartItems.length > 0 ? (
                carts.cartItems.map((cartItem, index) => (
                  <tr key={index}>
                    <td>{cartItem.item.itemCategory.name || 'N/A'}</td>
                    <td>{cartItem.item.name}</td>
                    <td>{cartItem.item.price}</td>
                    <td>{cartItem.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No items in cart</td>
                </tr>
              )}
              <tr className='table-danger'>
              <td colSpan={4}> Total is : ${carts.totalAmount}</td>
              </tr>
        </tbody>
       </Table>
     </Col>
     <Col>
      <Button onClick={onPurchace}className='mb-5'>Purchace</Button>
     </Col>
     </Container>
   </>
  )
}

export default Pos