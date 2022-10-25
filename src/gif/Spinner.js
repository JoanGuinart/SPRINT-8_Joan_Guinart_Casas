import React from "react";
import "./loader.css"

export const Spinner = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}