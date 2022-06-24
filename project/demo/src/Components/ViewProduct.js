import React from 'react'
import { useState,useEffect } from 'react'
import Productlist from './Productlist'
import axios from 'axios'
import { Table } from 'react-bootstrap'


const ViewProduct = (props) => {

    

const [array,setArray]=useState([])
const [mail,setMail]=useState(props.mail)

useEffect(() => {
    function getd() {
    const data={
       email:mail
      }  
      
      axios.post("http://localhost:4000/viewproducts",data)
        .then((res) => {
          setArray(res.data);
        })
    
        .finally();
    }

     getd();}
  

, []);

       


  return (
    <Table striped bordered hover variant="dark" >
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
         {array.map((product,index)=>{
            return(<Productlist key={index} productname={product.productname} productprice={product.productprice}
            quantity={product.quantity} category={product.category}   />)
         })}
        </tbody>
    </Table>
  )
}

export default ViewProduct