import React from 'react';
import Common from './Common';
import web from './images/logo.png';

const  About = () =>{

    return (<>
    <Common text="Welcome To About page of"  btnName="Contect Now" visit="/contect" imgSrc={web}></Common>        
    </>);
}

export default About;