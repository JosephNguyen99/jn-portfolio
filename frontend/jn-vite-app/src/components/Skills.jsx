// frontend/jn-vite-app/src/components/Skills.jsx
import React from 'react';

const Skills = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No Skills available.</p>;
    }

    return (
        <div>
            <h1>Skills</h1>
            <ul>
                {data.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;