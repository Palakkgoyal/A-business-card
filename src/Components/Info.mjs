import React from "react"

export default function Info(props){
    return(
        <div className="info--container">
            <h2>{props.name}</h2>
            <h6 id="profession">{props.profession}</h6>
            <a id="website" href={props.websiteUrl} target="_blank">{props.website}</a>
        </div>
    )
}

Info.defaultProps = {
    name: 'Your name',
    profession: 'Profession',
    website: 'yourwebsite.com'
}