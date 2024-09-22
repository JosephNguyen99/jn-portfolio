// frontend/jn-vite-app/src/components/Hobbies.jsx
import React from 'react';

const Hobbies = ({ data }) => {
    return (
        <div>
            <h2>Hobbies</h2>
            <ul>
                {data.map((hobby, index) => (
                    <li key={index}>{hobby.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hobbies;
