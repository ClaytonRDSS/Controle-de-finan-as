import React from "react"
import Navbar from "./navbar"

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b>My</b>M</span>
            <span className="logo-lg">
                <b>Minhas Finanças</b>
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="" className="sidebar-toggle" data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)