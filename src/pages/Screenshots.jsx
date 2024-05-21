import '../App.css';
import { useEffect, useState } from "react"
import "../styles/screenshots.css"
import "../styles/iphone_position.css";
import '../styles/ss_form.css';





const PositionForm = () => {
    const [time, setTime] = useState();
    const [battery, setBattery] = useState();
    const [coin, setCoin] = useState();
    const [position, setPositions] = useState();
    const [leverage, setLeverage] = useState();
    const [entryPrice, setEntryPrice] = useState();
    const [margin, setMargin] = useState();
    const [liqPrice, setLiqPrice] = useState();
    const [takeProfit, setTakeProfit] = useState();
    const [markPrice, setMarkPrice] = useState();
    const [charactersAfterDot, setCharactersAfterDot] = useState();

    // запрос актуальной цены монеты 
    useEffect(() => {
        let url = "https://api.binance.com/api/v3/ticker/price?symbol=" + coin + "USDT";

        fetch(url)
         .then((response) => response.json())
         .then((data) => {
            console.log(data.price);
            setMarkPrice(data.price);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, [coin]);

    // Автоматическое заполнение графы текущего времени
    function setCurrentTime() {
        let time = new Date();
        let hours = String(time.getHours());
        let minutes = String(time.getMinutes());
        
        if (hours.length == 1) {
            hours = "0" + hours;
        }
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
        
        let current_time = hours + ":" + minutes;

        setTime(current_time);
        //document.getElementById("input_time").setAttribute("value", current_time);
    }

    // Добавление запятой в написание тысяч 
    function addComma (number) {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };

    function saveScreenshot() {
        let value = 0;
        let position_size = 0;
        let unr_pnl = 0;
        let unr_pnl_percent = 0;
        let unr_pnl_rounded = 0;
        let r_pnl = 0;
        let r_pnl_rounded = 0;
        let characters_after_dot = 0;

        setMargin(margin.replace(",", "")); 

        if (entryPrice.toString().includes(".")) {
            characters_after_dot = entryPrice.toString().split( '.' ).pop().length; // кол-во цифр после точки 
        } else {
            characters_after_dot = 2;
        }
        setEntryPrice(parseFloat(entryPrice.toString().replace(",", "")));


        // Вычисление значений по формулам 
        value = margin * leverage;  
        position_size = value / entryPrice;
        unr_pnl = (markPrice - entryPrice) * position_size;
        unr_pnl_percent = (unr_pnl / margin) * 100; 
        r_pnl = margin * 0.01;

        // Визуальное формирование вывода  
        setEntryPrice(addComma(parseFloat(entryPrice).toFixed(charactersAfterDot)));
        setMarkPrice(addComma(parseFloat(markPrice).toFixed(charactersAfterDot)));
        setMargin(addComma(margin) + " USDT");
        value = addComma(value.toFixed(4));
        unr_pnl = unr_pnl.toFixed(4);
        position_size = position_size.toFixed(2);
        unr_pnl_percent = unr_pnl_percent.toFixed(2); 
        unr_pnl_rounded = parseFloat(unr_pnl).toFixed(2);
        r_pnl = parseFloat(r_pnl).toFixed(4) + " USDT";
        r_pnl_rounded = parseFloat(r_pnl).toFixed(2);
    }


    return (
            <div class="form_box">
                <div>
                    <label>time:</label>
                    <input 
                        id="input_time"
                        type="text"
                        name="time"
                        value={time}
                        placeholder="12:34"
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <button 
                        type="button" 
                        onClick={setCurrentTime}
                        class="set_current_time_btn"
                    >Set Current Time</button>
                </div>
                    
                <div>
                    <label>battery:</label>
                    <select name="battery" onChange={(e) => setBattery(e.target.value)}>
                        <option value='10'>10</option>
                        <option value='50'>50</option>
                        <option value='90'>90</option>
                    </select>
                    <label>%</label>
                </div>

                <div>
                    <label>coin:</label>
                    <input 
                        value={coin}
                        onChange={(e) => setCoin(e.target.value)}
                        placeholder='BTC'
                    />
                    <label>USDT</label>
                </div>
                
                <div>
                    <label>position:</label>
                    <select name="longshort" onChange={(e) => setPositions(e.target.value)}>
                        <option value='Long'>Long</option>
                        <option value='Short'>Short</option>
                    </select>
                </div>

                <div>
                    <label>leverage:</label>
                    <input 
                        type="text"
                        name="leverage"
                        value={leverage}
                        placeholder="50"
                        onChange={(e) => setLeverage(e.target.value)}
                    />
                    <label>.00x</label>
                </div>

                <div>
                    <label>entry price:</label>
                    <input 
                        type="text"
                        name="entry_price" 
                        placeholder="1,234.56"
                        onChange={(e) => setEntryPrice(e.target.value)}
                    />
                </div>
                        
                <div>
                    <label>margin:</label>
                    <input 
                        TYPE="text"
                        placeholder="1,234.56"
                        onChange={(e) => setMargin(e.target.value)}
                    />
                </div>
                        
                <div>
                    <label>liq. price:</label>
                    <input 
                        TYPE="text" 
                        NAME="liq_price"
                        placeholder="1,234.56"
                        value={liqPrice}
                        onChange={(e) => setLiqPrice(e.target.value)}
                    />
                </div>
                        
                <div>
                    <label>take profit:</label>
                    <input 
                        TYPE="text" 
                        NAME="take_profit" 
                        placeholder="1,234.56"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                    />
                </div>
                <button
                    onClick={saveScreenshot}
                >Save Screenshot</button>
            </div>
    )
}


const IphoneScreen = () => {
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

