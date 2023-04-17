import React,{useState} from 'react'

import {NavLink} from 'react-router-dom';

import ShowContactUs from '../HomeChunks/ShowContactUs'

const WebFooter =  (props, ref) => {

    const [showContact, setshowContact] = useState(false)


    const showContactUs = () =>{
        setshowContact(!showContact)
    }

        return (
            <>
            <footer>
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-12">
                                <div className="theme_bg_color p-sm-5 p-3 mb-3 contact_position">
                                    <div className="row">
                                        <div className="col-sm-4 mb-sm-0 mb-2">
                                                <h2>Contact Details</h2>
                                        </div>
                                        <div className="col-sm-4 mb-sm-0 mb-2">
                                            <div className="phoneIcon">
                                                0731-4970648
                                                <br></br>
                                                <span>(10:00 AM to 7:00 PM) - Monday to Saturday</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 mb-sm-0 mb-2">
                                            <div className="phoneIcon whatsAppIcon">
                                                +91-9024557318<span> (24X7X365)</span>
                                                <br></br>
                                                <span>Call &amp; WhatsApp</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 col-12 mt-3">
                                <div>
                                    <img src="../img/whitelogo.png" alt="" />
                                </div>
                                <p className="text-white">We help business through our technology powered, automated solution. get freedom to
                                    compare multiple carriers, select and ship, at
                                    the best rates and quickest time.
                                </p>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12 mt-3">
                                        <div>
                                    <img src="../img/gplay.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 mt-3">
                                        <div>
                                    <img src="../img/magento.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12 mt-3">
                                        <div>
                                    <img src="../img/shophy.png" alt="" />
                                        </div>
                                    </div>

                                </div> 
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-3 col-5 mt-5">
                                <ul className="pl-0">
                                    <li>
                                        <NavLink to="/AboutUs" target="_blank" rel="noopener noreferrer" className="text-white nav-link">About Us</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/Career" rel="noopener noreferrer" className="text-white nav-link">Careers</NavLink>

                                    </li>
                                     <li>
                                        <NavLink to="#" target="_blank" rel="noopener noreferrer" className="text-white nav-link">Services</NavLink>

                                    </li> 
                                    <li>
                                        <a href="#" onClick={showContactUs} rel="noopener noreferrer" className="text-white nav-link">Support</a>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5 col-7 mt-5">
                                <ul className="pl-0">
                                    <li>
                                        <NavLink to="PrivacyPolicy" rel="noopener noreferrer" className="text-white nav-link">Privacy policy</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="TermsAndConditions" rel="noopener noreferrer" className="text-white nav-link">Terms & Conditions</NavLink>

                                    </li>
                                     <li>
                                        <NavLink to="#" target="_blank" rel="noopener noreferrer" className="text-white nav-link">Sitemap</NavLink>

                                    </li> 
                                    <li>
                                    <a href="#" onClick={showContactUs} rel="noopener noreferrer" className="text-white nav-link">Contact Us</a>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-4 col-12 mt-5 footer_add">
                                <p><a href="tel:07314970648" className="text-white">073 1497 0648</a></p>
                                <p><a href="mailto:reachus@yolojet.com" className="text-white">reachus@yolojet.com</a></p>
                                <div className="address text-white">
                                    <p>
                                        <strong>Registered Office address :</strong><br />
                                        <span className="pl-0">KH 237
                                            Mavai Road
                                            Ghaziabad
                                            Uttar Pradesh
                                            201009</span>
                                    </p>
                                    <p>
                                        <strong>Corporate Office address :</strong><br />
                                        <span className="pl-0"> 8th floor, Metro Towers, P-809, scheme 54 Near Mangal City, Indore, Madhya Pradesh-452010</span>
                                    </p>
                                </div>
                                <div className="text-white" style={{cursor: "pointer"}}>
                                    <a href="https://www.facebook.com/Yolojet-104761428212956" className="text-white" target="_blank">
                                    <span><i className="mdi mdi-facebook" aria-hidden="true"></i> &nbsp; &nbsp; </span>
                                    </a>
                                      {/*<a href="https://www.linkedin.com/company/yolojet-internet-services-pvt-ltd/" className="text-white" target="_blank">
                                    <span><i className="mdi mdi-linkedin" aria-hidden="true"></i> &nbsp; &nbsp; </span>
                                    </a>*/}
                                      <a href="https://twitter.com/yolojet" className="text-white" target="_blank">
                                    <span><i className="mdi mdi-twitter" aria-hidden="true"></i> &nbsp; &nbsp; </span>
                                    </a>
                                      <a href="https://www.instagram.com/yolojet/" className="text-white" target="_blank">
                                    <span><i className="mdi mdi-instagram" aria-hidden="true"></i> &nbsp; &nbsp; </span>
                                    </a>
                                </div>
                                <div className="text-white mapicon mt-3">
                                    <a href="https://www.google.com/maps/place/Yolojet+Internet+Services+Pvt+Ltd/@22.7534141,75.8972057,15z/data=!4m5!3m4!1s0x0:0xa9134b324dba6984!8m2!3d22.7534141!4d75.8972057" target="_blank" className="text-white">
                                    <span className="bg-white"><img src="img/mapicon.png" alt="" /></span>  &nbsp; Visit our Office
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
            <section className="bg-black pt-4 pb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-white text-center">
                            <p>Copyright 2022 © Yolojet Pvt. Ltd. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>

            <ShowContactUs
          show={showContact}
          handleClose={showContactUs}
          />
            </>
        )
    }


export default WebFooter
