import React from "react";
import Email from "../Images/Email.png"

export default function EmailBtn() {
    return(
        <div className="email--container">
            <img src={Email} alt="Mail-box" id="Email--img" />
            <a href = "mailto: palakgoyal0304@gmail.com" id="Email--text">Email</a>
        </div>
    )
}