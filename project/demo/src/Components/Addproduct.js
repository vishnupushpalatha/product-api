import React from 'react'
import { Container, Button, Form } from "react-bootstrap";
import { useState,useEffect } from 'react';
import axios from 'axios'



const Addproduct = (props) => {

   
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [mail, setMail] = useState(props.mail);


   
  const getProduct = (event) => {
    setProductName(event.target.value);
  };

  
  const getPrice = (event) => {
    setProductPrice(event.target.value);
  };

  
  const getQuantity= (event) => {
    setQuantity(event.target.value);
  };


  
  const getCategory = (event) => {
    setCategory(event.target.value);
  };




  const addHandler = async (event) => {
    event.preventDefault();

    console.log(props.mail);
  
    const productData={
     
     email:mail,  
     productname:productName,
     productprice:productPrice,
     quantity:quantity,
     category:category 
    }
   
  console.log(productData)

   try{
   const response=await axios.post("http://localhost:4000/products",productData)  
   console.log(response); 
   if(response.status===201){
   alert(response.data);
  }
  else if(response.status===200){
    alert(response.data)
  } 
   } 
  catch(error){
  
    console.log(error);
  
  }
  
  }






  return (
  
    <div className="form">
    <h2 className="p-3">Add Product</h2>
    <Container>
      <div className="input-container my-3 p-3">
        <Form onSubmit={addHandler} >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>ProductName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              onChange={getProduct}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              onChange={getPrice}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="enter quantity"
              onChange={getQuantity}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the category"
              onChange={getCategory}
            />
          </Form.Group>

          <Button
            className="btn btn-outline-light m-4 my-2 rounded btn-md "
            type="submit">Add
          </Button>
        </Form>
      </div>
    </Container>
  </div>



  )
}

export default Addproduct