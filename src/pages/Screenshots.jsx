import '../App.css';
import { useState } from "react"


function PositionForm() {
    return (
            <div class="form_box">
                <div>
                    <label>Time:</label>
                    <input id="input_time" type="text" name="time" value="" placeholder="12:34"/>
                    <button type="button" onclick="setCurrentTime()" class="set_current_time_btn">Set Current Time</button>
                </div>
                    
                <div>
                    <label>Battery:</label>
                    <select name="battery">
                        <option value='10'>10</option>
                        <option value='50'>50</option>
                        <option value='90'>90</option>
                    </select>
                    <label>%</label>
                </div>

                <div>
                    <label>Coin:</label>
                    <input type="text" name="coin" value="" placeholder="BTC"/>
                    <label>USDT</label>
                </div>
                
                <div>
                    <label>Position:</label>
                    <select name="longshort">
                        <option value='Long'>Long</option>
                        <option value='Short'>Short</option>
                    </select>
                </div>

                <div>
                    <label>Leverage:</label>
                    <input type="text" name="leverage" value="" placeholder="50"/>
                        <label>.00x</label>
                </div>

                <div>
                    <label>Entry price:</label>
                    <input 
                        type="text"
                        name="entry_price" 
                        VALUE="" 
                        placeholder="1,234.56"
                    />
                </div>
                        
                <div>
                    <label>Margin:</label>
                    <input TYPE="text" NAME="margin" VALUE="" placeholder="1,234.56"/>
                </div>
                        
                <div>
                    <label>Liq. price:</label>
                    <input TYPE="text" NAME="liq_price" VALUE="" placeholder="1,234.56"/>
                </div>
                        
                <div>
                    <label>Take Profit:</label>
                    <input TYPE="text" NAME="take_profit" VALUE="" placeholder="1,234.56"/>
                </div>
            </div>
    )
}


export default function Screenshots() {
    const [userType, setUserType] = useState("admin")
    const [ssType, setSsType] = useState("position")
    
    function handleUserTypeChange(event) {
        setUserType(event.target.value);    
        console.log(event.target.value);
    }
    
    function handleSsTypeChange(event) {
        setSsType(event.target.value);
    }

    return (
        <>
            <h1>Fake Screenshots</h1>
            <div className="page_content screenshots_page">
                <br></br>

                <span>Выбери тип скрина: </span>
                <select onChange={handleSsTypeChange}>
                    <option value="position">Position</option>
                    <option value="balance">Balance</option>
                </select>

                <div>
                    {ssType == "position" &&
                        <PositionForm/>
                    }
                </div>
            </div>
        </>
    );
}

