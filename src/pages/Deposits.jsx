import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';
import { deposits } from "../data/deposits_list.js"
import { users } from "../data/users_list.js";
import "../styles/deposits.css"

function Deposit(props) {
    return (
        <tr className="deposit">
            <th>1</th>
            <th>100$</th>
            <th>{props.dog}</th>
            <th>Today</th>
        </tr>
    )
}

export default function Deposits() {
    const [userType, setUserType] = useState("admin")

    return (
        <>
            <h1>Deposits</h1>
            <div className="page_content deposits_page">
            <div className="deposits_filters">
                <span>Timing</span>
                <select >
                    <option value="admin">Сегодня</option>
                    <option value="admin">Вчера</option>
                    <option value="dog">Неделя</option>
                    <option value="dog">Все</option>
                </select>
                
                {userType == "admin" &&
                    <>
                        <span>Dog</span>
                        <select >
                            <option value="admin">All</option>
                            {users.map((user) => ( 
                                <option value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </>
                }
            </div>
            {userType == "dog" &&
                <div>
                    <span>Новый деп:</span>
                    <input />
                </div>
            }
            <table className="deposits_table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Sum ($)</th>
                        <th>Dog Name</th>
                        <th>Date / Time</th>
                    </tr>
                </thead>
                <tbody>
                    {deposits.map((signal) => ( 
                        <Deposit     
                            key = {signal.coin}
                            dog = {signal.dog}
                        />
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
