import '../App.css';
import { useState } from "react"


function PositionForm() {
    return (
            <div class="form_box">
                <div>
                    <label>time:</label>
                    <input id="input_time" type="text" name="time" value="" placeholder="12:34"/>
                    <button type="button" onclick="setCurrentTime()" class="set_current_time_btn">Set Current Time</button>
                </div>
                    
                <div>
                    <label>battery:</label>
                    <select name="battery">
                        <option value='10'>10</option>
                        <option value='50'>50</option>
                        <option value='90'>90</option>
                    </select>
                    <label>%</label>
                </div>

                <div>
                    <label>coin:</label>
                    <input type="text" name="coin" value="" placeholder="BTC"/>
                    <label>USDT</label>
                </div>
                
                <div>
                    <label>position:</label>
                    <select name="longshort">
                        <option value='Long'>Long</option>
                        <option value='Short'>Short</option>
                    </select>
                </div>

                <div>
                    <label>leverage:</label>
                    <input type="text" name="leverage" value="" placeholder="50"/>
                        <label>.00x</label>
                </div>

                <div>
                    <label>entry price:</label>
                    <input 
                        type="text"
                        name="entry_price" 
                        VALUE="" 
                        placeholder="1,234.56"
                    />
                </div>
                        
                <div>
                    <label>margin:</label>
                    <input TYPE="text" NAME="margin" VALUE="" placeholder="1,234.56"/>
                </div>
                        
                <div>
                    <label>liq. price:</label>
                    <input TYPE="text" NAME="liq_price" VALUE="" placeholder="1,234.56"/>
                </div>
                        
                <div>
                    <label>take profit:</label>
                    <input TYPE="text" NAME="take_profit" VALUE="" placeholder="1,234.56"/>
                </div>
            </div>
    )
}


function IphoneScreen() {
    return (
        <div class="iphone_screen" id="screenshot">
                <div class="top_bar">
                    <span class="iphone_time" id="iphone_time">11:09</span>
                    <div class="iphone_icons" id="iphone_icons"></div>
                </div>


                <div class="position">
                    <div class="position_header">
                        <span class="coin_name" id="coin">BTCUSDT</span>
                        <span id="longshort" class="longshort">Long</span>
                        <span id="leverage" class="leverage">Cross 50.00x</span>
                    </div>

                    <div class="position_body">
                        <span id='position_size' class="position_size">6.735</span>
                        <span id='entry_price' class="entry_price">1,848.91</span>
                        <span id='mark_price' class="mark_price">2,485.37</span>
                        <span id='liq_price' class="liq_price">31,216.10</span>
                        <span id='value' class="value">51,731.0050</span>
                        <span id='unr_pnl' class="unr_pnl">-17,807.6355 USDT (-1721.18%)</span>
                        <span id='unr_pnl_rounded' class="unr_pnl_rounded">≈ -17807.64 USD</span>
                        <span id='r_pnl' class="r_pnl">-31.0386 USDT</span>
                        <span id='r_pnl_rounded' class="r_pnl_rounded">≈ -31.04 USD</span>
                        <span id='margin' class="margin">1,034.6201 USDT</span>
                        <span id='tp' class="tp">
                            <span>
                                <span>Entire Position:</span>
                                <span id="tp_value">64,781.5</span>
                            </span>
                            <span>/</span>
                            <span>--</span>
                            <span>Partial Position: 0</span>
                        </span>
                        <span class="tp_plug" id="tp_plug">Set TP/SL</span>
                    </div>    
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
                <div className="screenshots_type_select">
                    <span>Screen type:</span>
                    <select onChange={handleSsTypeChange}>
                        <option value="position">Position</option>
                        <option value="pnlroi">PnL/ROI</option>
                        <option value="balance">Balance</option>
                    </select>
                </div>

                    {ssType == "position" &&
                        <>
                            <PositionForm />
                            <IphoneScreen />
                        </>
                    }
            </div>
        </>
    );
}

