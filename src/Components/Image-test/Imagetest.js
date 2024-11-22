import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap';
import './Imagetest.css'

const Imagetest = () => {

    const [imageName,setImageName] = useState("");
    const [image,setImage]= useState(null);

    const getImage =async(event)=>{
        event.preventDefault();
        console.log("hello")
        const respnose = await axios(`http://localhost:9000/file/${imageName}`,{
            responseType: 'blob',
        })
        const image_data = respnose.data;
        console.log(image_data);
        setImage(URL.createObjectURL(image_data));
    }

    const handleInput=(event)=>{
       setImageName(event.target.value);
    }
  return (
    <>
      <Form>
        <input type='text' onChange={handleInput}></input>
        <button onClick={getImage}>Submit</button>
      </Form>
      {image && <img src={image} alt="Fetched" className='images' />}
    </>
  )
}

export default Imagetest