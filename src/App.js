import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// pages
import MainPage from "./pages/MainPage"
import Screenshots from "./pages/Screenshots"
import Signals from "./pages/Signals"
import AdminPanel from "./pages/AdminPanel"
import Deposits from "./pages/Deposits"
import Dashboard from "./pages/Dashboard"


// components
import Navbar from "./components/Navbar"


function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="signals" element={<Signals />} />
                    <Route path="screenshots" element={<Screenshots />} />
                    <Route path="deposits" element={<Deposits />} />
                    <Route path="admin" element={<AdminPanel />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
