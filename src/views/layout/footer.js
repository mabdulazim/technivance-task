import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';

export default function FooterComponent() 
{
    return (
        <Footer>
            <div className="container">
                <Copyright>
                    <span>
                        <Link to="/">Football Leagues</Link> © 2019
                    </span>
                    <Link to="/" id="footer-logo">
                        <img src={Logo} alt="logo" />
                    </Link>
                </Copyright>
            </div>
        </Footer>      
    );
}

const Footer = styled.footer`
height: 60px;
background-color: #181817;
display: inline-block;
width: 100%;
position: absolute;
bottom: 0;
div {
    text-align: center;
    color: #7c7c7c;
    font-size: 13px;
    line-height: 59px;
}
`

const Copyright = styled.div`
float: none;
padding-left: 0;
span {
    font-family: Tahoma !important;
}
a > img {
    fill: #fff;
    width: 40px;
    height: 40px;
    vertical-align: middle;
}
`