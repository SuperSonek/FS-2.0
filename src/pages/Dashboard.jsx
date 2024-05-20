import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <div className="page_content dashboard_page">
                <span>Тайминги: </span>
                <select>
                    <option>Сегодня</option>
                    <option>Вчера</option>
                    <option>Неделя</option>
                </select>

                <table className="dashboard_table">
                    <tr>
                        <th>
                            <span>Суммарный депозит:</span><br/>
                            <span>5000$</span>
                        </th>
                        <th>
                            <span>Количество созданых скринов:</span><br/>
                            <span>67</span>
                        </th>
                    </tr>
                </table>
            </div>
        </>
    );
}
