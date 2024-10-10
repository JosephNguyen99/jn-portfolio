// frontend/jn-vite-app/src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Axios is used to make HTTP requests

// Import the individual section components
import AboutMe from './AboutMe';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Interests from './Interests';
import Experiences from './Experiences';

const HomePage = () => {
    // State to store all the home data fetched from the backend
    const [homeData, setHomeData] = useState(null);

    // Fetch all home data when the component is mounted
    useEffect(() => {
        // axios.get('http://127.0.0.1:5000/api/home')  // Call the Flask API to get all sections data
        axios.get('/api/home')  // Call the Flask API to get all sections data
            .then(response => {
                console.log("Home Data: ", response.data);  // Log the response to verify the structure
                setHomeData(response.data);  // Store the fetched data in state
            })
            .catch(error => {
                console.error('There was an error fetching the home data!', error);
            });
    }, []);

    if (!homeData) {
        return <div>Loading...</div>;
    }

    // Render the sections if the data is available, otherwise show a loading message
    return (
        <div>
            {homeData ? (
                //  Render each section with consistent layout
                <div className="space-y-16 px-8 py-16 max-w-6xl mx-auto">
                    {/* Pass the fetched data as props to each section component */}
                    <AboutMe data={homeData.about_me} />
                    <Skills data={homeData.skills} />
                    <Experiences data={homeData.work_experiences} />
                    <Hobbies data={homeData.hobbies} />
                    <Interests data={homeData.interests} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default HomePage;
