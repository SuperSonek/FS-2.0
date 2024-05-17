import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';
import CreateNewAccount from "./CreateNewAccount"

export default function AdminPanel() {
    const [currentSection, setCurrentSection] = useState("statistics")
    
    const handleClick = (section) => (event) => {
        console.log(section);
        setCurrentSection(section);
    }
    
    return (
        <>
        <h1>Админка</h1>
        
        <div className="page_content admin_panel">
            <div className="admin_panel_menu">
                <ul>
                    <li><button onClick={handleClick("all-accounts")}>Все аккаунты</button></li>
                    <li><button onClick={handleClick("create-new-account")}>Создать новый аккаунт</button></li>
                </ul>  
            </div>

            <div className="admin_panel_content">
                {currentSection == "create-new-account" && 
                    <CreateNewAccount />
                }
            </div>
        </div>
        </>
    );
}
