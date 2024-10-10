// frontend/jn-vite-app/src/components/Skills.jsx
import React from 'react';

const Skills = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No Skills available.</p>;
    }

    return (
        <section id="skills" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.map((skill, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:bg-blue-100 transition duration-300">
                <p className="text-lg font-medium text-gray-800 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
    );
    // return (
    //     <div>
    //         <h1>Skills</h1>
    //         <ul>
    //             {data.map(skill => (
    //                 <li key={skill.id}>{skill.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default Skills;