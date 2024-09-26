import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Case-sensitive and correct path
import './styles/index.css';  // Ensure the styles directory and file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

