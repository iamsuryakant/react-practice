import React from "react";
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from "../components/contact/Contact";

const Main = () => {
    return (
        <>
        <Navbar/>
        <Home />
        <About />
        <Contact/>
        </>
    )
}

export default Main;