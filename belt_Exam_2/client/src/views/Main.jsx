import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import axios from 'axios';
import {Link} from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    const [pet, setPet] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPet(res.data))
            .catch(err => console.error(err))
    }, [pet])




    return (
        <div>

            <div>
                <h1>Pet shelter</h1>
                <button onClick={() => { history.push('/pets/new') }}>Add pet to the shelter</button>

            </div>
            <h2> These pets are looking for a good home</h2>
            <div>

                {
                    pet.map((pet, i) => {
                        return (
                            <div>


                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <td key={i}>{pet.name}</td>
                                        <td key={i}>{pet.type}</td>
                                        <td> <button onClick={() => { history.push(`/pets/${pet._id}`) }}>details</button> |
                                        <Link to={"/edit/"+pet._id}>Edit</Link></td>
                                    </tr>
                                  
                                </table>

                            </div>
                        )
                    }
                    )
                }

            </div>

        </div>
    )
}
export default Main;
















