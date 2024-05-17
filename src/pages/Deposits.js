import '../App.css';
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Deposits() {

    return (
        <>
            <h1>Deposits</h1>
            <div className="page_content deposits_page">
            <table className="deposits_table">
                <tr>
                    <th>№</th>
                    <th>Sum ($)</th>
                    <th>Dog Name</th>
                    <th>Date / Time</th>
                </tr>
            </table>
            </div>
        </>
    );
}
