import React from 'react';
import styled from 'styled-components';
import defaultLogo from '../../assets/images/league.png';

export default ({ 
    homeTeamName, 
    awayTeamName, 
    status, 
    homeTeamScoreHalfTime, 
    homeTeamScoreFullTime,
    awayTeamScoreHalfTime, 
    awayTeamScoreFullTime,
}) => (
    <MatchContainer>

        <MatchStatus>{status}</MatchStatus>

        <MatchContent>

            <TeamContainer style={{ flexDirection: 'row-reverse'}}>
                
                <TeamLogo>
                    <img 
                        alt={homeTeamName} 
                        src={defaultLogo} 
                    />
                </TeamLogo>

                <TeamName>{homeTeamName}</TeamName>

            </TeamContainer>

            <MatchResult>
                {homeTeamScoreFullTime ? homeTeamScoreFullTime : homeTeamScoreHalfTime} - {awayTeamScoreFullTime ? awayTeamScoreFullTime : awayTeamScoreHalfTime}
            </MatchResult>

            <TeamContainer>

                <TeamLogo>
                    <img 
                        alt={awayTeamName}
                        src={defaultLogo} 
                    />
                </TeamLogo>

                <TeamName>{awayTeamName}</TeamName>

            </TeamContainer>
        
        </MatchContent>

    </MatchContainer>
);

const MatchContainer = styled.div`
-webkit-box-align: center;
align-items: center;
background-color: rgb(255, 255, 255);
height: 100px;
margin-bottom: 15px;
padding: 10px;
position: relative;
text-align: center;
`
const MatchStatus = styled.div`
min-height: 14px;
white-space: nowrap;
color: rgb(127, 151, 171);
font-size: 11px;
font-weight: 600;
`
const MatchContent = styled.div`
-webkit-box-align: center !important;
display: flex !important;
align-items: center !important;
flex-wrap: wrap !important;
`
const MatchResult = styled.div`
width: 12% !important;
justify-content: center;
font-size: 16px;
color: rgb(80, 80, 80);
font-family: Tahoma;
`
const TeamContainer = styled.div`
-webkit-box-align: center;
width: 44%;
text-align: left;
display: flex;
align-items: center;
flex-wrap: nowrap;
min-height: 32px;
`
const TeamLogo = styled.div`
img {
    width: 50px; 
    height: 50px;
}
`
const TeamName = styled.div`
font-size: 14px;
color: rgb(80, 80, 80);
white-space: nowrap;
text-overflow: ellipsis;
max-width: 80%;
margin: 0px 8px;
overflow: hidden;
`