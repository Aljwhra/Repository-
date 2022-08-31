import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../components/Form'
import List from '../components/List'


const Main = () =>{
    const [products , setProducts] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/products ")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err))
    },[products])

    return (
        <>

        <Form />
        <List  products={products} />
        
        </>
    );
}
export default Main;