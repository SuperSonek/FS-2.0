import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';
import { users } from "../data/users_list.js";


function User(props) {
    return (
        <tr>
                <th>{props.id}</th>
                <th>{props.name}</th>
                <th>{props.type}</th>
                <th><Link to="1">open</Link></th>
        </tr>
    )
};

function UserDetailInfo() {
    
}

export default function AllUsersList() {

    return (
        <>
            <h1>All Users</h1>
            
            <div className="page_content">
                <Link to="/admin">{"<- Back"}</Link><br/>
                <Link to="new">Create New User</Link>
                
                <table className="users_list_table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>type</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => ( 
                            <User     
                                key = {user.id}
                                id = {user.id}
                                name = {user.name}
                                type = {user.type}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
