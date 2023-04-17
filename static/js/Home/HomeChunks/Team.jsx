

import React from 'react'

const Team = () => {
        return (
            <>
                <section className="pt-4">
                     <div class="d-block d-lg-none">
                            <h4 className="heading_fs text-center pb-3"><strong>Yolojet Team</strong>
                            </h4>
                            <p>
                                <img src="img/team.png" alt="" / >
                            </p>
                    </div>
                    <div className="container-fluid p-0 d-lg-block d-none">
                        <h4 className="heading_fs text-center pb-3"><strong>Yolojet Team</strong>
                        </h4>
                        <div class="teamImg"></div>
                    </div>
                   {/* <div className="container">
                        <div className="row" style={{backgroundColor: '#bd8e02',position:'absolute'}}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <p className="text-white pt-4 pl-3">Contact Details</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                <p className="text-white"><span ><img src="img/call.png" alt="" className="pt-3 pl-3"/ ></span>0731-4970678<br></br><span className="pl-5"><small>(10.00 AM to 07.00 PM - Mon to Sat)</small></span></p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                               <p className="text-white"><span ><img src="img/whatsapp.png" alt="" className="pt-3 pl-3"/ ></span>+91-9024557318<span>(24x7x365)</span><br></br><span className="pl-5"><small>Call & WhatsApp </small></span></p>
                            </div>
                        </div>
                     </div>     */}
                </section> 
            </>
        )
    }

export default Team
