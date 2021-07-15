import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 31px;
`;

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    line-height: 2.0;
    
    a {
        margin-left: 40px;
        font-weight: bold;
        font-size: 18px;
    }
`;

function Header() {
    return (
        <Wrapper>
            <Logo>GIPHER</Logo>
            <Nav>
                <Link to={{ pathname: '/' }}>
                    Search GIFs
                </Link>
                <Link to={{ pathname: '/favorites' }}>
                    My Favorites
                </Link>
            </Nav>
        </Wrapper>
    );
}

export default Header;
