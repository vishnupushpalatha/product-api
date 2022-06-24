import React from 'react'
import Addproduct from './Addproduct'
import ViewProduct from './ViewProduct'
import {Button} from 'react-bootstrap'


const Dashboard = (props) => {
  
    // console.log(props.mail);
  return (
    <div>
        <Button variant="primary" onClick={()=>{props.out()}} >Logout</Button>
        <Addproduct mail={props.mail} />
        <ViewProduct mail={props.mail} />
       
        
    </div>
  )
}

export default Dashboard