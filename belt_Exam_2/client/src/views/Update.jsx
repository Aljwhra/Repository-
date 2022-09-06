import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const Update = () => {
   
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const[error, setError] = useState([]);
    const history = useHistory();
    const {id} = useParams();
    const [pet, setPet] = useState([]);
    
////////////////////////////////////////////////


    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pets/"+id)
        .then(res => {
            setPet(res.data)
            setName(res.data.name) 
            setType(res.data.type)
            setDescription(res.data.description)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)

        })
        .catch(err => console.error(err))
    },[id])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/update/'+id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
            
        })
            .then(
               
                history.push("/pets")
            )
            .catch(err=> {
                console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })          
            
    }
    return (
        <>
        <button onClick={() => { history.push('/pets') }}> Back to home </button>

        <h1>Pet shelter</h1>
      
        <h2>Edit : {pet.name}</h2>
        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}

          
            <p>
                    <label>Pet Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Pet type</label><br />
                    <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <p>
                    <label>skill 1:</label><br />
                    <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                </p> 
                <p>
                    <label>skill 2:</label><br />
                    <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                </p> 
                <p>
                    <label>skill 3:</label><br />
                    <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                </p> 


            <input type="submit"/>
        </form>
        </>
    )
}

export default Update;