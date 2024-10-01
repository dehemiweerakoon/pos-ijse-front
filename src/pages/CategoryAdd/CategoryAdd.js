/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Form,Button,Alert } from 'react-bootstrap'
import { postRequest, } from '../../services/ApiServices'
const CategoryAdd = () => {

    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const [show1, setShow1] = useState(false);
    const handleSubmit =async(event)=>{
        event.preventDefault();
        const data ={
            name: name
        }
        const respnose = await postRequest("/categories",data);
        if(respnose.data!=null){
          setMessage("Category saved successfully")
        }else{
            setMessage("unsuccessful");
        }
        setShow1(true);
        const timer = setTimeout(() => setShow1(false), 2000);
        window.location.reload()
    }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
       Add Category 
      </Button>
    </Form>
    <Alert show={show1} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
         {message}
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

export default CategoryAdd