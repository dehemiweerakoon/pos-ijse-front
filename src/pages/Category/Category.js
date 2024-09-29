import React, { useEffect, useState } from 'react'
import { Container, Table, Col, Button } from 'react-bootstrap'
import { getRequest } from '../../services/ApiServices';
const Category = () => {


  const [categories,setCategories] = useState([]);

  const getAllCategory = async()=>{
    const respnose = await getRequest("/categories");
    console.log(respnose.data);
    setCategories(respnose.data);
  }
  useEffect(()=>{
    getAllCategory();
  },[])
  return (
    <>
    <Container>
      <Col>   
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
            <td><Button>Update</Button></td>
            <td><Button variant="danger">Delete</Button></td>
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

export default Category