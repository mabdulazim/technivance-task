import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function HeaderComponent() 
{
    return (
        <Header>
            <div className="container">
                <Menu>
                    <li>
                        <Link to="/">Matches</Link>
                    </li>
                    <li>
                        <Link to="/leagues">Leagues</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </Menu>
            </div>
        </Header>      
    );
}

const Header = styled.div`
background: #fff;
width: 100%;
height: 50px;
margin-bottom: 30px;
box-shadow: rgba(74, 74, 74, 0.5) 0px 1px 10px 0px !important;
`

const Menu = styled.ul`
float: right;
margin: 0;
padding: 0;
list-style-type: none;
li {
    float: left;
    padding: 0 20px;
    margin: 15px 0;
    border-right: 1px solid #E8E8E8;
}
li:last-child {
    border: 0;
    padding-right: 0;
}
li a {
    color: #000;
}
`
