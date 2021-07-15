import React from 'react';
import Common from './Common';
import web from './images/Home.jpg';

const  Home = (props) =>{
    return (
        <>
        <Common text="Grow your business with"  btnName="Get Started" imgSrc={web} visit="/service"></Common>    
        </>
    );
}

export default Home;