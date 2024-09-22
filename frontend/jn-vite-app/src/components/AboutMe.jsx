// frontend/jn-vite-app/src/components/AboutMe.jsx
import React from 'react';

const AboutMe = ({ data }) => {
    return (
        <div>
            <h1>About Me</h1>
            <p>{data.bio}</p>
            {data.picture_url && <img src={data.picture_url} alt="About Me" />}
        </div>
    );
};

export default AboutMe;
