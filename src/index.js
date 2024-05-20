import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom"

import './styles/index.css';
import './styles/signals.css';
import './styles/ss_form.css';
import "./styles/admin_panel.css"
import "./styles/deposits.css"
import "./styles/dashboard.css"
import "./styles/screenshots.css"
import "./styles/login.css";
import "./styles/iphone_position.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        <App />    
    </React.StrictMode>
);

reportWebVitals();
