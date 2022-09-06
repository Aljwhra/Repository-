import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router";

const AddPet= () => {
      
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const[error, setError] = useState([])
    const history = useHistory();

    ///////////////////////////////////////////////////////

    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
           
        })
            .then(res=> history.push("/pets"))
            
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }
   

  

    return (
       <div>
        <h1>Pet shelter</h1>
        
        <br/>
        <button onClick={() => { history.push('/pets') }}> Back to home </button>

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

               
                <input type="submit" />
            </form>
            </div>
    )
}

export default AddPet;