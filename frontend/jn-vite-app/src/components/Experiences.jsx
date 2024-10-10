// frontend/jn-vite-app/src/components/Experiences.jsx
import React from 'react';

const Experiences = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <p>No Experiences data available.</p>;
    }


    return (
        <section id="work-experience" className="bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Work Experience</h2>
          <div className="space-y-6">
            {data.map((experience, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                {/* Job Title */}
                <h3 className="text-2xl font-bold">{experience.job_title}</h3>
    
                {/* Company Name */}
                <p className="text-lg font-semibold text-gray-700">{experience.company}</p>
    
                {/* Start Date - End Date */}
                <p className="text-gray-600">
                  {new Date(experience.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {experience.end_date === "Current" ? "Present" : new Date(experience.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
    
                {/* Description */}
                <p className="mt-2 text-gray-700 leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>
    );
};

export default Experiences;