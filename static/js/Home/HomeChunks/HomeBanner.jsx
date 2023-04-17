

import React, { useState, useEffect } from "react";

import Slider from "react-slick";

import { NavLink } from 'react-router-dom';

const HomeBanner = () => {

	const settings = {
		dots: false,
		infinite: true,
        fade: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 4000,
		cssEase: "linear",
		pauseOnHover: true,
		slidesToShow: 1,
        slidesToScroll: 1,
	  }

    return(
		<>
        <Slider {...settings}>
                <article className="home_banner common_banner banner1">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 home_banner_text">
                        {/*<p className="text-white"><strong>YOLOJET</strong> is empowering <strong>sellers and Individuals</strong> <span className="theme_text_color">easy pickup and delivery services  along </span> with <strong>resolving the logistics pain points.</strong> Thus delivering flawless experience.</p>
			          */}        <h1 className="text-white display-4"><strong>Timely pickup and delivery services.</strong>			                    	
			                    </h1>
			                    <p className="text-white">
			                    	No need to wait for a long for the pickup of your orders. Just
			                    	book it and you are done. We are here to get that done.
			                    </p>
                        </div>
                    </div>
                    </div>
                </article>
				<article className="home_banner common_banner banner2">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 home_banner_text">
                        {/*<p className="text-white"><strong>YOLOJET</strong> is empowering <strong>sellers and Individuals</strong> <span className="theme_text_color">easy pickup and delivery services  along </span> with <strong>resolving the logistics pain points.</strong> Thus delivering flawless experience.</p>
			          */}        <h1 className="text-white display-4"><strong>Real time notification</strong>			                    	
			                    </h1>
			                    <p className="text-white">
								Our out of the box integrations triggers real-time tracking and auto-alerts through various channels to inform customers of their shipment status
			                    </p>
                        </div>
                    </div>
                    </div>
                </article>
				<article className="home_banner common_banner banner3">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 home_banner_text">
                        {/*<p className="text-white"><strong>YOLOJET</strong> is empowering <strong>sellers and Individuals</strong> <span className="theme_text_color">easy pickup and delivery services  along </span> with <strong>resolving the logistics pain points.</strong> Thus delivering flawless experience.</p>
			          */}        <h1 className="text-white display-4"><strong>Automated weight dispute management</strong>			                    	
			                    </h1>
			                    <p className="text-white">
								Manage you weight discrepancies in a single click with AI based automated weight dispute management system
			                    </p>
                        </div>
                    </div>
                    </div>
                </article>
				<article className="home_banner common_banner banner4">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 home_banner_text">
                        {/*<p className="text-white"><strong>YOLOJET</strong> is empowering <strong>sellers and Individuals</strong> <span className="theme_text_color">easy pickup and delivery services  along </span> with <strong>resolving the logistics pain points.</strong> Thus delivering flawless experience.</p>
			          */}        <h1 className="text-white display-4"><strong>NDR Management</strong>			                    	
			                    </h1>
			                    <p className="text-white">
								Our AI-driven messaging, automated issue categorisation, deep API integrations with NDR systems of courier partners, and customer-specific workflows for managing NDRs with dedicated support team ensuring 100% touch base to all NDR orders
			                    </p>
                        </div>
                    </div>
                    </div>
                </article>
            </Slider>
	</>

)
}




export default HomeBanner;