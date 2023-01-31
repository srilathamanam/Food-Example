import React from 'react';
import SiteFooter from '../shared/SiteFooter';
import NavBar from '../shared/NavBar';

const NotFound = () => {
    return (
        <>  
            <NavBar />
            <p>We can't find the page you are looking for. Please try again.</p>
            <SiteFooter />
        </>
    )
};

export default NotFound;