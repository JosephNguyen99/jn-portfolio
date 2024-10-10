// frontend/jn-vite-app/src/components/Interests.jsx
import React from 'react';

const Interests = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No interests available.</p>;  // Handle case when no data is available
    }

    return (
        <section id="interests" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Interests</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.map((interest, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:bg-yellow-100 transition duration-300 text-center">
                <p className="text-lg font-medium text-gray-700">{interest.name}</p>
              </li>
            ))}
          </ul>
        </section>
    );

    // return (
    //     <div>
    //         <h2>Interests</h2>
    //         <ul>
    //             {data.map(interest => (
    //                 <li key={interest.id}>{interest.name}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default Interests;
