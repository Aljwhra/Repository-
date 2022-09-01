import React, { useState } from 'react'
import axios from 'axios';

const AddPirate= () => {
      
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [treasure_chests, setTreasureChests] = useState('');
    const [catch_phrase, setCatchPhrase] = useState('');
    const [peg_leg, setPegLeg] = useState(true);
    const [hook_hand, setHookHand] = useState(true);
    const [eye_patch, setEyePatch] = useState(true);
    const [crew_position, setCrewPosition] = useState('');
    const[error, setError] = useState([])
    ///////////////////////////////////////////////////////

    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', {
            name,
            image,
            treasure_chests,
            catch_phrase,
            hook_hand,
            eye_patch,
            peg_leg,
            crew_position


        })
            .then(res=>setError([]))
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

        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
                <p>
                    <label>Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>image</label><br />
                    <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />
                </p>
                <p>
                    <label>Treasure chests</label><br />
                    <input type="number" onChange={(e) => setTreasureChests(e.target.value)} value={treasure_chests} />
                </p>
                <p>
                    <label>catch phrase</label><br />
                    <input type="text" onChange={(e) => setCatchPhrase(e.target.value)} value={catch_phrase} />
                </p> 

                <p>
                <label>Peg Leg:</label>
                <input name="peg_leg" type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={peg_leg} />
                </p>

                <p>
                <label>hook hand:</label>
                <input name="hook_hand" type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hook_hand} />
                </p>

                <p>
                <label>eye patch:</label>
                <input name="eye_patch" type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eye_patch} />
                </p>

                <label>Crew Position:</label>
                    <select name="crew_position" type="text" onChange={(e) => setCrewPosition(e.target.value)} value={crew_position}>
                        <option >Select One</option>
                        <option value="Captain">Captain</option>
                        <option value="FirstMate">First Mate</option>
                        <option value="QuarterMaster">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="PowderMonkey">Powder Monkey</option>
                    </select><br/>

                    

                <input type="submit" />
            </form>
    )
}

export default AddPirate;