
import React from 'react';
import BaseModal from '../../Utils/BaseModal';

const ShowContactUs = ({
    show = false,
    handleClose = () => {},
    ...props
}) => {


    return (
        <>
            <BaseModal
                show={show}
                title={'Contact Here'}
                handleClose={handleClose}
            >
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p><a href="tel:07314970648"><i className="fa fa-phone" aria-hidden="true" style={{transform:" rotate(75deg)"}}></i><span className="pl-2">073 1497 0648</span></a></p>
                    <p><a href="mailto:reachus@yolojet.com" ><i className="fa fa-envelope" aria-hidden="true"></i><span className="pl-2">reachus@yolojet.com</span></a></p>
                </div>
            </div>
            </BaseModal>
        </>
    )
}

export default ShowContactUs
