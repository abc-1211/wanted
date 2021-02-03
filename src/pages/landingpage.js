import React from "react";

// components
import Navbar from "../components/navbar/navbar";
import Lpcontent from "../components/Lpcontent/Lpcontent.js";
import Search from "../components/search/search";

function LandingPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <Lpcontent/>
        </React.Fragment>
    )
}

export default LandingPage;