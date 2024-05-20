import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <>
            <h1>Login</h1>
            <div className="page_content">
                <div className="login_form">
                    <div>
                        <label>Name</label>
                        <input/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input/>
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </>
    );
}
