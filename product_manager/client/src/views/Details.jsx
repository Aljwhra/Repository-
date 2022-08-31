import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [products, setProducts] = useState({})
    const {id} = useParams()
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => setProducts(res.data))
        .catch(err => console.error(err))
    },[id])
    return (
        <>
        <p>Title: {products.title}</p>
        <p>Price: {products.price}</p>
        <p>Description: {products.description}</p>
        
        </>
    );
}
export default Details;