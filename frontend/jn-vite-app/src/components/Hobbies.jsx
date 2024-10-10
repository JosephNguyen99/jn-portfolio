// frontend/jn-vite-app/src/components/Hobbies.jsx
import React from 'react';

const Hobbies = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hobbies available.</p>;  // Handle case when no data is available
    }

    return (
        <section id="hobbies" className="bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Hobbies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.map((hobby, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow hover:bg-green-100 transition duration-300 text-center">
                <p className="text-lg font-medium text-gray-700">{hobby.name}</p>
              </li>
            ))}
          </ul>
        </section>
    );
};

export default Hobbies;
