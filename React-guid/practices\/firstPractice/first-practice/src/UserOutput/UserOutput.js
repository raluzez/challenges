import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Stabas</p>
            <p>{props.username}</p>
        </div>
    )
}

export default userOutput;