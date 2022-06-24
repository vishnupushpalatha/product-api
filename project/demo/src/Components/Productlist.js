import React from 'react'

function Productlist(props) {
  return (
    

   <tr>
    <td>{props.productname}</td>
    <td>{props.productprice}</td>
    <td>{props.quantity}</td>
    <td>{props.category}</td>
   </tr>




  )
}

export default Productlist