// frontend/jn-vite-app/src/components/Hobbies.jsx
import React from 'react';

const Hobbies = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hobbies available.</p>;  // Handle case when no data is available
    }
    
    return (
        <div>
            <h2>Hobbies</h2>
            <ul>
                {data.map(hobby => (
                    <li key={hobby.id}>{hobby.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hobbies;
