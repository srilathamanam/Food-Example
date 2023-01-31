import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Header} from 'grommet';

const NavBar = () => {
    return (
        <Header pad="medium" responsive="yes" background="accent-1" color="neutral-1"> 
            <Nav direction="row">
                <Link className='link' to='/'>
                    Home
                </Link> 
            </Nav>
        </Header>
    );
};

export default NavBar;