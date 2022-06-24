import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { Container, Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'




const Login = (props) => {



const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const getEmail = (event) => {
  setEmail(event.target.value);
};

const getPassword = (event) => {
  setPassword(event.target.value);
};



const loginHandler = async (event) => {
  event.preventDefault();

  const loginData={
  
   email:email,
   password:password
  
  }
 
 try{
 const response=await axios.post("http://localhost:4000/login",loginData)  
 console.log(response); 
 if(response.status===201){
  alert(response.data);

  props.mail(loginData.email)
  props.data()
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
    <h2 className="p-3">Login Form</h2>
    <Container>
      <div className="input-container my-3 p-3">
        <Form onSubmit={loginHandler} >
          

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={getEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={getPassword}
            />
          </Form.Group>

          

          <Button
            className="btn btn-outline-light m-4 my-2 rounded btn-md "
            type="submit"
          >
            Submit
          </Button>
      
          <Link to={props.link}

            className="btn btn-outline-success m-4 my-2 rounded btn-md ">Registration </Link>


        </Form>
      </div>
    </Container>
  </div>



  )
}

export default Login