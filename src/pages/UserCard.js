import { BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';
import { useState } from "react"


export default function UserCard() {
    
    const params = useParams();
    console.log(params);
    
    return (
        <>
            <h1>User Details</h1>
            <div className="page_content">
                <Link to="/admin/users">{"<- Back"}</Link><br/>
                <span>UserCard</span>
            </div>
        </>
    )
}

