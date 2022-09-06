import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const ShowPets = () => {
    const [pet, setPet] = useState([])
    const {id} = useParams()
    const history = useHistory()
    
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pets/"+id)
        .then(res => setPet(res.data))
        .catch(err => console.error(err))
    },[id],[pet])

    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/pets/delete/" + id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    return (
        <>
        <h1>Pet shelter</h1>
        <button onClick={() => { history.push('/pets') }}> Back to home </button>
        <br/>
        <button onClick={() => { handleDelete(pet._id) }}>Adopt {pet.name}</button>
        <br/>
        
        <h1>Details About : {pet.name}</h1>
        <p>pet type: {pet.type}</p>
        <p>Description : {pet.description}</p>
        <p>skill: {pet.skill1} , {pet.skill2}, {pet.skill3}</p>
       
     
        </>
    );
}
export default ShowPets;