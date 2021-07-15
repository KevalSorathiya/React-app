import React from 'react';

const Footer = () =>{

    const year = new Date().getFullYear();
    return (<>
    <footer className="w-100 bg-light text-center p-3">
        <p>CopyRight @ {year}</p>
    </footer>
    </>);
}

export default Footer;
