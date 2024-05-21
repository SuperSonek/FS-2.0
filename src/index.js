import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// общие стили 
import './styles/index.css';
import "./styles/admin_panel.css"
import "./styles/dashboard.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        <App />    
    </React.StrictMode>
);

reportWebVitals();
