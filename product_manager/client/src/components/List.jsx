import React from 'react'
import { Link } from "react-router-dom";

const List = (props) => {


  return (
    <>
      {
        props.products.map((products, i) => {

          return (
            <>
              <Link to={"/products/" + products._id}><p key={i} >{products.title}</p></Link>
            </>
          )

        })

      }
    </>
  );
}
export default List;