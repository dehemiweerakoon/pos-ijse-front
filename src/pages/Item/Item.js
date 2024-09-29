import React, { useEffect, useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import Table  from 'react-bootstrap/Table'
import { getRequest } from '../../services/ApiServices'


const Item = () => {
const [items,setItems] = useState([]);


const getAllItems = async()=>{
 
  const respnose = await getRequest("/items");
   setItems(respnose.data);
   console.log("jkkll");
}

useEffect(()=>{
  getAllItems();
},[])

  return (
   <>
   <Container>
    <Col sm={12}>
    <Table striped bordered hover className='mt-5 table-primary' responsive>
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
          <td><Button>Update</Button></td>
          <td><Button>Delete</Button></td>
          </tr>
            )
            
          })
        }
        
      </tbody>
    </Table>
    </Col>
    
   </Container>
   
   </>
  )
}

export default Item