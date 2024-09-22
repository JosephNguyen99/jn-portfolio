// frontend/jn-vite-app/src/components/Interests.jsx
import React from 'react';

const Interests = ({ data }) => {
    return (
        <div>
            <h2>Interests</h2>
            <ul>
                {data.map((interest, index) => (
                    <li key={index}>{interest.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Interests;
