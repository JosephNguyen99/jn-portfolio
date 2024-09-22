// frontend/jn-vite-app/components/ProjectList.jsx
// 'useEffect' is a hook that lets us perform side effects in function components
// 'useState' is a hook that allows us to store state (similar to Python variables holding data)
import React, { useEffect, useState} from 'react';
import axios from 'axios';  // Axios is a library for making HTTP requests, similar to Python's 'requests' module

const ProjectList = () => {
    // React's 'useState' hook sets up a state variable called 'projects', and 'setProjects' allows us to modify it.
    // This is similar to how you might declare a variable in Python, but here we're using a state to make it reactive in the UI.
    const [projects, setProjects] = useState([]);

    // `useEffect` hook is like a lifecycle method in React.
    // It works similarly to Python functions that are triggered on certain events.
    // In this case, it's like `__init__` or setup code that runs when the component is rendered for the first time.
    useEffect(() => {
        // We use Axios to fetch data from our Flask backend.
        // `axios.get()` is like Python's `requests.get()` for making a GET request to the API.
        axios.get('api/projects')
            .then(response => {
                // If the request is successful, we store the fetched data in the `projects` state.
                // This is similar to assigning data to a variable in Python, but here it's stored in React's state.
                setProjects(response.data);
            })
            .catch(error => {
                // If there's an error (like a network issue), we log it to the console.
                // This is similar to Python's try/except block, where you handle errors gracefully.
                console.error('There was an error fetching the projects...', error);
            });
    }, []);
    // The empty array `[]` as the second argument ensures that `useEffect` only runs once when the component mounts, similar to initializing something in Python during setup.

    return (
        <div>
            {/* 
            Conditional rendering: We check if there are any projects in the state.
            If there are projects, we render them in a list using the `map()` method, 
            which is similar to Python's list comprehension or `for` loop.
            */}
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        // Here we are looping through the `projects` array.
                        // The `key` attribute is a unique identifier for each list item (similar to iterating over a dictionary with keys in Python).
                        <li key={project.id}>
                            {/* Rendering the project's title, description, and GitHub link */}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.github_link}>View on GitHub</a>
                        </li>
                    ))}
                </ul>
            ) : (
                // If there are no projects, we display a message.
                <p>No projects found.</p>
            )}
        </div>
    );
};

// We export the `ProjectList` component so it can be imported and used in other parts of our app.
export default ProjectList;


