import React from "react";
import "./project.css"



const Project = (props) => {
    const navitems = props.nav
    const Icons = props.icon
    return (
        <React.Fragment>
            <section className="navbar2">
                <section className="navbar4">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <img src={props.logos} alt="" />
                            <button type="button" className="navbar-toggler" data-bs-target="#myMenu" data-bs-toggle="collapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <nav className="collapse navbar-collapse" id="myMenu">
                                <ul className="nav navbar-nav nav-underline ms-auto">
                                    {navitems.map((link, i) => (
                                        <li className="nav-item" key={i}>
                                            <a href="" className="nav-link navbar3">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </nav>
                </section>
            </section>
        </React.Fragment>
    )
}
export default Project