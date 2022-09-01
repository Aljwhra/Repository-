import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import AddPirate from '../components/AddPirate'

const Main = () =>{
    const [pirates, setUsers] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirates")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err))
    },[pirates])

    return (
        <>
        <AddPirate />
       
        </>
    );
}
export default Main;