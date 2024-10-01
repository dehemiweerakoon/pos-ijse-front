import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Table } from 'react-bootstrap'
import { getRequest } from '../../services/ApiServices';

const Stock = () => {

    const [stocks,setStock] = useState([]);

    const getAllStock = async()=>{
        const response = await getRequest("/stock");
        setStock(response.data);
    }

    useEffect(()=>{
     getAllStock();
    },[])

  return (
    <>
    <Container>
     <Col>
      <Table striped bordered hover className='mt-5'>
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
                    <td><Button>Update</Button></td>
                    </tr>
                    </>
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

export default Stock