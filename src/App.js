import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// pages
import MainPage from "./pages/MainPage"
import Screenshots from "./pages/Screenshots"
import Signals from "./pages/Signals"
import Deposits from "./pages/Deposits"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

// admin panel
import AdminPanel from "./pages/AdminPanel"
import AllUsersList from "./pages/AllUsersList"
import UserCard from "./pages/UserCard"
import CreateNewUser from "./pages/CreateNewUser"


// components
import Navbar from "./components/Navbar"


function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signals" element={<Signals />} />
                    <Route path="screenshots" element={<Screenshots />} />
                    <Route path="deposits" element={<Deposits />} />
                    <Route path="admin" element={<AdminPanel />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="admin/users" element={<AllUsersList />} />
                    <Route path="admin/users/new" element={<CreateNewUser />} />
                    <Route path="admin/users/:userId" element={<UserCard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
