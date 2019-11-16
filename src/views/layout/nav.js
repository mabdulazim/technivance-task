import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import LogoImg from '../../assets/images/logo.png';
import FontAwesome from 'react-fontawesome';


export default function NavComponent() 
{
    return (
        <Nav>
            <div className="container">

                <Logo>
                    <img src={LogoImg} alt="Logo" />
                </Logo>

                <NavMenu>

                    <NavMenuLi style={{ margin: '10px 0 8px' }}>
                        <Link to="#">
                            <FontAwesome
                                className="fab fa-android"
                                name="fa-android"
                                size="2x"
                            />
                            <i className="fab fa-android" style={{ fontSize: '20px' }}></i>
                        </Link>
                    </NavMenuLi>

                    <NavMenuLi style={{ margin: '10px 0 8px' }}>
                        <Link to="#">
                            <i className="fab fa-apple" style={{ fontSize: '20px' }}></i>
                        </Link>
                    </NavMenuLi>

                    <NavMenuLi>
                        <Link to="/login">Login</Link>
                    </NavMenuLi>
                    
                    <NavMenuLi>
                            <Link to="/register">Register</Link>
                    </NavMenuLi>
                </NavMenu>
            </div>
        </Nav>
    );
}

const Nav = styled.div`
background: #181817;
width: 100%;
height: 40px;
`
const Logo = styled.div`
width: 100px;
height: 100px;
float: left;
img {
    height: 100%;
    width: 100%;
}
`
const NavMenu = styled.ul`
float: right;
margin: 0;
padding: 0;
list-style-type: none;
`
const NavMenuLi = styled.li`
float: left;
padding: 0 10px;
margin: 11.5px 0;
font-size: 12px;
a {
    text-decoration: none;
    transition: all .35s ease-in-out;
    -moz-transition: all .35s ease-in-out;
    -webkit-transition: all .35s ease-in-out;
    -o-transition: all .35s ease-in-out;
    cursor: pointer;
    outline: 0!important;
    color: #eee;
}
`