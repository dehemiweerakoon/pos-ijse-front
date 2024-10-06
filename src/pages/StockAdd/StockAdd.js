import React, { useEffect, useState } from 'react'
import { Form,Button} from 'react-bootstrap'
import { getRequest, postRequest } from '../../services/ApiServices';
const StockAdd = () => {
    const [qty ,setQty] = useState(0);
    const [price,setPrice] = useState(0.0);
    const [message,setMessage] = useState("");
    const [items,setItems] = useState([]);
    const [newItem,setNewItem] = useState(null);
    const handleItems = (event)=>{
        setNewItem(event.target.value);
    }

      const getAllItems = async()=>{
        const respnose = await getRequest("/items");
        setItems(respnose.data);
      }

     
      const handleSubmit =async()=>{
        const data ={
            item:{
              id:newItem
            },
            quantity:qty
        }
        console.log(data);
        const respnose = await postRequest("/stock",data);
        console.log(respnose);
        
        setMessage("Stock added successfully");
        setTimeout(()=>{setMessage("")},2000);
        window.location.reload();
        // the set message 
      }
    useEffect(()=>{
      getAllItems();
    },[])


  return (
   <>
    <Form>
      <Form.Group className="mb-3" controlId="qty">
        <Form.Label>Item Name</Form.Label>
      <Form.Select aria-label="Default select example" onChange={handleItems} value={newItem}>
      <option>Select the Item</option>
      
    {
      items && items.map((item,index)=>{
        return(
          <option value={item.id}>{item.name}</option>
        )
      })
    }
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" step={0.01} value={price} onChange={(event)=>setPrice(event.target.price)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="qty">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" step={0.01} value={qty} onChange={(event)=>{setQty(event.target.value)}} placeholder="quantity"/>
      </Form.Group>

    {
       <p>{message}</p>
    }
    <Button variant="primary"  className='mt-4' onClick={handleSubmit}>
           Save Changes
          </Button>
    </Form>
   </>
  )
}

export default StockAdd