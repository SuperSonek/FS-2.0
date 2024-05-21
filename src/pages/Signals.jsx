import '../App.css';
import { useState } from "react"
import { signals } from "../data/signals_list.js"
import '../styles/signals.css';


const AddNewSignal = () => {
    return (
        <div>
            <h3>Add New Signal</h3>
            <input/>
            <button>Add</button>
        </div>
    )
}

const Signal = (props) => {
    return (
        <div className="signal">
            <div className="signal_header">
                <span>Coin: {props.coin}</span>
            </div>
            <div className='signal_body'>
                <span>Type: {props.type}</span>
                <span>Entry Price: {props.entry_price}</span>
                <span>Liq Price: {props.liq_pricce}</span>
                <span>Status: {props.status}</span>
                <span>Leverage: {props.leverage}</span>
                <span>Balance: {props.balance}</span>
                <span>TP: {props.take_profit}</span>
                <span>Closing Price: </span>
            </div>
            <div className='signal_footer'>
                {(props.status == "open" && props.userType == "admin") &&
                    <button>Close</button>
                }
                {props.userType == "admin" && <button>Delete</button>}
            </div>
        </div>
    )
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
                                entry_price = {signal.entry_price} 
                                status = {signal.status}
                                liq_price = {signal.liq_price}
                                balance = {signal.balance}
                                type = {signal.type}
                                leverage = {signal.leverage}
                                take_profit = {signal.take_profit}
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

                    {userType == "admin" &&  <AddNewSignal />}
                </div>
            </div>
        </>
    );
}
