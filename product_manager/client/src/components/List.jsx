import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const List = (props) => {


  const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/products/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

  return (
    <>
       <h1>All Products</h1>
      {
        props.products.map((products, i) => {

          return (
            <>
                
              <Link to={"/products/" + products._id}><p>{products.title}</p> 
              <Link to={"/edit/"+products._id}>Edit </Link>
              |<button onClick={()=>{handleDelete(products._id)}}> Delete</button></Link> 
            </>
          )

        })

      }
    </>
  );
}
export default List;