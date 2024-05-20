import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react"


export default function Navbar() {
    const [userType, setUserType] = useState("admin")
    function handleUserTypeChange(event) {
        setUserType(event.target.value);    
        console.log(event.target.value);
    }
    
    return (
        <div className="header">
            
            <div>
                <Link className="header_btn" to="/">Home</Link>
                <Link className="header_btn" to="/signals">Signals</Link>
                <Link className="header_btn" to="/screenshots">Screenshots</Link>
                <Link className="header_btn" to="/deposits">Deposits</Link>
                {userType == "admin" && 
                    <>  
                        <Link className="header_btn" to="/dashboard">Dashboard</Link>
                        <Link className="header_btn" to="/admin">Adminka</Link>
                    </>
                }
            </div>
        </div>
    )
}

