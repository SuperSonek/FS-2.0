import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function CreateNewUser() {

    return (
        <>
            <h1>New User</h1>
            <div className="page_content">
                <Link to="/admin/users">{"<- Back"}</Link>
                
                <div className="new_user_form">
                    <label>Имя</label>
                    <input />
                    <br/>
        
                    <label>Пароль</label>
                    <input />
                    <br/>
        
                    <button>Create</button>
                </div>
            </div>
        </>
    );
}
