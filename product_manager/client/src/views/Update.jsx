import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const Update = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState(""); 
    const history = useHistory();
    const {id} = useParams();
    // const [user, setProduct] = useState({})

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            setTitle(res.data.title) 
            setPrice(res.data.price)
            setDescription(res.data.description) 
        })
        .catch(err => console.error(err))
    },[id])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/'+id, {
            title,
            price,
            description

        }) 
            .then()
            .catch(err=>console.log(err))
            history.push("/products")
    }
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

export default Update;