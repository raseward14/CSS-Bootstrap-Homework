// import React
import React from "react";
// import components
import Nav from "../components/Navbar/index";
import MERN from "../components/MERNfooter";
import Skills from "../components/Skills";

// import style
import "./style.css";

function Homepage() {
    return (
        <div>
            <aside><Nav /></aside>
            <h1 className="heading">Home</h1>
            <section className='home'>Hi! I'm Richard, and I build stuff.
            <Skills />
            <MERN />
            </section>
        </div>
    );
};

export default Homepage;