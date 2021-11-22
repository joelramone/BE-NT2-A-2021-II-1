import React from "react"
import "./index.css";

export default ({ className, onClick, title }) => {
   
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}