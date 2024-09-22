// frontend/jn-vite-app/src/components/Skills.jsx
import React from 'react';

const Skills = ({ data }) => {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {data.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
