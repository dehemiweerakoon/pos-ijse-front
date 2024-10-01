import React, { useState } from 'react'
import { Form,Button,Alert } from 'react-bootstrap'
import { postRequest } from '../../services/ApiServices';
const ItemAdd = (props) => {

const {data} = props;
const [show1, setShow1] = useState(false);
const [name,setName] = useState("");
const [nprice,setnPrice] =useState(0);
const [categoryid,setCategoryId] = useState(0);

const handleCategory = (event)=>{
   setCategoryId(event.target.value); 
}
const handlePrice =(event)=>{
   
   setnPrice(event.target.value);
}
const handleName =(event)=>{
    setName(event.target.value);
}

const handleSubmit = async(event)=>{
    event.preventDefault();
    const data_submit = {
        name: name,
        price:parseFloat(nprice),
        itemCategory:{
           id: parseInt(categoryid)
        }
    }
    const result = await postRequest("/items",data_submit);
    setShow1(true);
    const timer = setTimeout(() => setShow1(false), 2000);
    window.location.reload()
}

  return (
   <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="name" value={name} onChange={handleName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" step={0.01} placeholder="price" value={nprice} onChange={handlePrice}/>
      </Form.Group>

      <Form.Select aria-label="Default select example" onChange={handleCategory} value={categoryid}>
      <option>Open this select menu</option>
      
    {
     data && data.map((category,index)=>{
        return(
          <option value={category.id}>{category.name}</option>
        )
      })
    }
    </Form.Select>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
    <Alert show={show1} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
         Saved Successfully
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow1(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
   </>
  )
}

export default ItemAdd