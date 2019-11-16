import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import MatchCard from './matchCard';
import { getMatches } from '../../_actions';

export default function () 
{
    const matches  = useSelector(state => state.getMatches);
    const dispatch = useDispatch();
    const params   = useParams();

    useEffect(() => 
    {
        document.title = `Matches List`;
        dispatch(getMatches(params.id));
    }, [dispatch, params]);

    return (
        <Fragment>

            {matches.loading && <div className="loader"></div>}

            <Row>
                {matches.data.map((match, i) => {
                    return(
                        <Col key={i} xs={12} md={6} lg={6}>
                            <MatchCard 
                                homeTeamName={match.homeTeam.name}
                                awayTeamName={match.awayTeam.name}
                                status={match.status}
                                homeTeamScoreHalfTime={match.score.halfTime.homeTeam}
                                homeTeamScoreFullTime={match.score.fullTime.homeTeam}
                                awayTeamScoreHalfTime={match.score.halfTime.awayTeam}
                                awayTeamScoreFullTime={match.score.fullTime.awayTeam}
                            />
                        </Col>
                    );
                })}
            </Row>
            
        </Fragment>
    );
}