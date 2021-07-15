import React from 'react';
import { NavLink } from 'react-router-dom';

const Common =(props) =>{
    return(<>
           <section id="header" className="d-flex align-items-center" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5  order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.text} <strong className="brand-name">Decode Up</strong></h1>
                            <h2 className="my-3">
                                We are the team of Telented developers making Website.
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 order-1 order-lg-2 header-img">
                            <img src={props.imgSrc} alt="about_image" className="img-fluid animated rounded"/>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>
    </section>
    </>);
}

export default Common;