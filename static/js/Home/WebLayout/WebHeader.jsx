

import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import GetInTouch from './GetInTouch';

const WebHeader = (props) => {

    const [showModal, setshowModal] = useState(false)


    const GetinTouch = () =>{

        setshowModal(!showModal)
    }


  const [sideMenu, setSideMenu] = useState(false);

    const OpenMenu = () =>{
        setSideMenu(!sideMenu)
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo">
                               <NavLink to="/">
                               <img
                                    src="/img/logo.svg"
                                    alt="LOGO"
                                    className="mt-2"
                                />
                               </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0">
                                <div className="row w-100 mobile_header_row">
                                    <div className="col-lg-10">
                                        <nav className="navbar text-uppercase pl-0 pr-0">
                                            <div
                                                className={`${
                                                    sideMenu
                                                      ? "navbar-collapse customcollapse"
                                                      : "navbar-collapse"
                                                  }`}
                                            >
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                         <NavLink
                                                            className="nav-link"
                                                            to="/"
                                                            exact={true}
                                                        >
                                                            Home
                                                         </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                         <NavLink
                                                            className="nav-link"
                                                            to="/AboutUs"
                                                            exact={true}
                                                        >
                                                            about us
                                                         </NavLink>

                                                    </li>
                                                    <li className="nav-item">
                                                         <a
                                                            className="nav-link"
                                                           href="/#wiwRef"
                                                        >
                                                            how it works
                                                         </a>
                                                    </li>
                                                    <li className="nav-item">
                                                         <a
                                                            className="nav-link"
                                                            href="/#features"


                                                        >
                                                            features
                                                         </a>
                                                    </li>
                                                    <li className="nav-item mb-1">
                                                         <NavLink
                                                            className="nav-link"
                                                            to="/Career"
                                                            exact={true}
                                                        >Career</NavLink>
                                                    </li>
                                                    <li className="nav-item mr-1 mb-2">
                                                         <NavLink
                                                            className="nav-link bg-dark text-white track_btn"
                                                            to="/track"
                                                        >
                                                            Track
                                                         </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a type="button" data-toggle="modal" data-target="#contactform" 
                                                        className="nav-link bg-dark text-white track_btn" onClick={GetinTouch}
                                                        >
                                                        Get in Touch</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="d-flex justify-content-between pt-2 align-items-center flex ">
                                            <div className="login_signup d-flex text-capitalize">
                                                 <NavLink
                                                    to="/app/dashboard"
                                                    className="theme_text_color nav-link"
                                                >
                                                    
                                                 </NavLink>
                                                 <NavLink
                                                    to="/login"
                                                    className="theme_bg_color nav-link text-white"
                                                >
                                                    log in
                                                 </NavLink>
                                            </div>
                                            <button
                                            onClick={OpenMenu}
                                                className="navbar-toggler"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <GetInTouch 
        show={showModal}
        handleClose={GetinTouch}
        title="GET IN TOUCH"
        />
        </>
    );
}

export default WebHeader;
