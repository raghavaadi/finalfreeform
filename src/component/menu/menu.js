import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './menu.css';

function menu(){
    return (

        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/xml">XML</Link></li>
        <li><Link to="/json">JSON</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
    </ul>
    )
}
export default menu 