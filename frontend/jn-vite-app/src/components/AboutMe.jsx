// frontend/jn-vite-app/src/components/AboutMe.jsx
import React from 'react';

const AboutMe = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <p>No About Me data available.</p>;
    }


    return (
        <section id="about" className="bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <img 
                src={data.picture_url} 
                alt={data.name} 
                className="rounded-full w-40 h-40 mb-4 shadow-md md:mb-0"
              />
            </div>
            {/* Bio */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.bio}
              </p>
            </div>
          </div>
        </section>
    );
    // return (
    //     <div>
    //         <h1>About Me</h1>
    //         <p>{data.bio}</p>
    //         {data.picture_url && <img src={data.picture_url} alt="About Me" />}
    //     </div>
    // );
};

export default AboutMe;