import React from "react"
import FacebookIcon from "../Images/FacebookIcon.png"
import GitHubIcon from "../Images/GitHubIcon.png"
import InstagramIcon from "../Images/InstagramIcon.png"
import LinkedinIcon from "../Images/LinkedinIcon.png"
import TwitterIcon from "../Images/TwitterIcon.png"

export default function Footer() {
    return (
        <footer>
           <img src={TwitterIcon} alt="Twitter" />
           <img src={FacebookIcon} alt="Facebook" />
           <img src={InstagramIcon} alt="Instagram" />
           <img src={LinkedinIcon} alt="Linkdin" />
           <img src={GitHubIcon} alt="Github" />
        </footer>
    )
  }