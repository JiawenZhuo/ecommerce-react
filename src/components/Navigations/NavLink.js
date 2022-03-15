import React from 'react';
import { LinkWrapper, StyledLink } from './style.js';
import {Link} from 'react-router-dom';
function NavLink(){
    return(
        <LinkWrapper>
            <Link to='/'><StyledLink>Collections</StyledLink></Link>
            <Link to='/men'><StyledLink>Men</StyledLink></Link>
            <Link to='/Women'><StyledLink>Women</StyledLink></Link>
            <Link to='/About'><StyledLink>About</StyledLink></Link>
            <Link to='/Contract'><StyledLink>Contact</StyledLink></Link>
        </LinkWrapper>
    );
}

export default NavLink;