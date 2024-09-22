import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Optional: include your styling

// ReactDOM.createRoot is how we initialize the app and render it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
