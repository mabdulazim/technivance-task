import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTeam } from '../../_actions';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import defaultLogo from '../../assets/images/league.png';
import Matches from '../match/matchList';

export default function () 
{
    const team     = useSelector(state => state.getTeam);
    const dispatch = useDispatch();
    const params   = useParams();

    useEffect(() => 
    {
        document.title = !team.loading ? team.data.name  : `-`;
        dispatch(getTeam(params.id));
    }, [dispatch, params]);
    
    return (
        <Fragment>
            
            {team.loading && <div className="loader"></div>}
            
            {team.data && 
                <Fragment>

                    <TeamContainer>

                        <TeamLogo>
                            <img src={defaultLogo} alt={team.data.name} />
                        </TeamLogo>

                        <TeamText>
                            <h3>{team.data.name}</h3>
                            <p>{team.data.name}</p>
                        </TeamText>

                    </TeamContainer>

                    <Matches />

                </Fragment>
            }

            {team.error && <div style={{textAlign: 'center'}}>No data found</div>}

        </Fragment>
    );
}

const TeamContainer = styled.div`
background: #fff;
padding: 20px;
overflow: hidden;
margin-bottom: 30px;
background-image: url(https://www.ghawykora.com/app-assets/images/bg.png);
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-position: 50% 100%;
width: 100%;
position: relative;
`
const TeamLogo = styled.div`
float: left;
height: 150px;
width: 150px;
img {
    width: 100%;
    height: 100%;
}
`

const TeamText = styled.div`
float: left;
padding: 20px;
color : #fff;
`