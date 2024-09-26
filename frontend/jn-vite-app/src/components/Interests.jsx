// frontend/jn-vite-app/src/components/Interests.jsx
import React from 'react';

const Interests = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No interests available.</p>;  // Handle case when no data is available
    }
    
    return (
        <div>
            <h2>Interests</h2>
            <ul>
                {data.map(interest => (
                    <li key={interest.id}>{interest.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Interests;
