import '../App.css';
import { useState } from "react"
import { signals } from "../data/signals_list.js"


function AddNewSignal() {
    return (
        <div>
            <h3>Add New Signal</h3>
            <input/>
            <button>Add</button>
        </div>
    )
}

function Signal(props) {
    return (
        <div className="signal">
            <span>Coin: {props.coin}</span>
            <br/>
            <span>Price: {props.price}</span>
            <br/>
            <span>Status: {props.status}</span>
        
            {(props.status == "open" && props.userType == "admin") &&
                <button>Close</button>
            }
        
        </div>
    )
}

function handleUserTypeChange() {
    
}


export default function Signals() {
    const [userType, setUserType] = useState("admin")
    function handleUserTypeChange(event) {
        setUserType(event.target.value);    
        console.log(event.target.value);
    }
    
    return (
        <>
            <h1>Signals</h1>
            <div className="page_content signals_page">
                <div className="signals_page_left">
                    <div className="signals_list">
                        {signals.map((signal) => ( 
                            <Signal     
                                key = {signal.coin}
                                coin = {signal.coin}
                                price = {signal.price} 
                                status = {signal.status}
                                userType = {userType}
                            />
                        ))}
                    </div>
                </div>

                <div className="signals_page_right">
                    <select onChange={handleUserTypeChange}>
                        <option value="admin">Админ</option>
                        <option value="dog">Дог</option>
                    </select>

                    {userType == "admin" && 
                        <AddNewSignal />
                    }
                </div>
            </div>
        </>
    );
}
