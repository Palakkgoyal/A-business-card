import React from "react";
import Photo from "./Components/Photo.mjs"
import Info from "./Components/Info.mjs"
import Email from "./Components/Email.mjs"
import About from "./Components/About.mjs"
import Footer from "./Components/Footer.mjs"

export default function App() {
    return(
        <div className="App">
        <Photo />
        <Info name="Palak Goyal" profession="Frontend Developer" websiteUrl="https://palakgoyal.netlify.app" website="palakgoyal.netlify.app"/>
        <Email />
        <About />
        <Footer />
        </div>
    )
}