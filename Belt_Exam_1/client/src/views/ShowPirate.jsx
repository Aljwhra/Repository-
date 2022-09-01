import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const ShowPirate = () => {
    const [pirate, setPirate] = useState({})
    const {id} = useParams()
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirates/"+id)
        .then(res => setPirate(res.data))
        .catch(err => console.error(err))
    },[id])
    return (
        <>
        <h1>About</h1>
        <p>image: {pirate.image}</p>
        <p>crew position: {pirate.crew_position}</p>
        <p>peg leg: {pirate.peg_leg}</p>
        <p>eye patch: {pirate.eye_patch}</p>
        <p>hook hand: {pirate.hook_hand}</p>
            
        </>
    );
}
export default ShowPirate;