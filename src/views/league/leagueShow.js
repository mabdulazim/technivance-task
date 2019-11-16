import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getLeague } from '../../_actions';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import defaultLogo from '../../assets/images/league.png';
import Teams from '../team/teamList';

export default function () 
{
    const league   = useSelector(state => state.getLeague);
    const dispatch = useDispatch();
    const params   = useParams();

    useEffect(() => 
    {
        dispatch(getLeague(params.id));
    }, [dispatch, params]);
    
    return (
        <Fragment>
                        
            {league.loading && <div className="loader"></div>}

            {league.data && 
                <Fragment>

                    <LeagueContainer>

                        <LeagueLogo>
                            <img src={defaultLogo} alt={league.data.name} />
                        </LeagueLogo>

                        <LeagueText>
                            <h3>{league.data.name}</h3>
                            <p>{league.data.name}</p>
                        </LeagueText>

                    </LeagueContainer>

                    <Teams />

                </Fragment>
            }

            {league.error && <div style={{textAlign: 'center'}}>{league.error.message}</div>}

        </Fragment>
    );
}

const LeagueContainer = styled.div`
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
text-align: center;
`
const LeagueLogo = styled.div`
margin: auto;
height: 150px;
width: 150px;
img {
    width: 100%;
    height: 100%;
}
`

const LeagueText = styled.div`
padding: 20px;
color: #fff;
`