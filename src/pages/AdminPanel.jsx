import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';
import CreateNewUser from "./CreateNewUser"
import AllUsersList from "./AllUsersList";

export default function AdminPanel() {
    const [currentSection, setCurrentSection] = useState("statistics")
    
    const handleClick = (section) => (event) => {
        console.log(section);
        setCurrentSection(section);
    }
    
    return (
        <>
            <h1>Adminka</h1>

            <div className="page_content admin_panel">
                <div className="admin_panel_menu">
                    <Link to="users">All users list</Link>
                </div>

                <div className="admin_panel_content">
                    {currentSection == "create-new-user" && 
                        <CreateNewUser />
                    }
                    {currentSection == "all-users" &&
                        <AllUsersList />
                    }
                </div>
            </div>
        </>
    );
}
