import React from "react";
import Profile from "../Profile.png"

export default function Photo() {
    return(
        <div className="photo--container">
        <img src={Profile} alt="Palak Goyal" className="photo" />
        </div>
    )
}