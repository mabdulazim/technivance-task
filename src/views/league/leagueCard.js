import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import defaultLogo from '../../assets/images/league.png';

export default ({id, name, area}) => (
    <League>
        <Link to={`/leagues/${id}`} >
            <LeagueLogo>
                <img src={defaultLogo} alt={name} />
            </LeagueLogo>
            <LeagueText>
                <span>{name}</span>
                <p>{area}</p>
            </LeagueText>
        </Link>
    </League>
);

const League = styled.div`
-webkit-box-align: center;
align-items: center;
background-color: rgb(255, 255, 255);
height: 90px;
margin-bottom: 15px;
padding: 10px;
position: relative;
`
const LeagueLogo = styled.div`
float: left;
height: 100%;
img {
    width: 60px; 
    height: 60px;
}
`

const LeagueText = styled.div`
width: calc(100% - 60px);
float: left;
height: 100%;
padding: 10px;
overflow: hidden;
text-overflow: ellipsis;

span {
    color: #000;
    font-size: 14px;
}
p {
    color: #909090;
    font-size: 12px;
}
`