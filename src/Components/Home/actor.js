import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Actor = () => {
    const { id } = useParams();
    const [actorDetails, setActorDetails] = useState({});

    useEffect(() => {
        async function fetchActorDetails() {
            try {
                const response = await axios.get(`http://localhost:3002/actor/${id}`);
                setActorDetails(response.data);
            } catch (err) {
                console.error('Error fetching actor details:', err);
            }
        }

        fetchActorDetails();
    }, [id]);


    return (
        <div>
            {/* <h2>Actor Profile</h2> */}
            {/* <p>Actor ID: {id}</p> */}
            <h3>{actorDetails.name}</h3>
            <p>{actorDetails.biography}</p>
        </div>
    );
};

export default Actor;
