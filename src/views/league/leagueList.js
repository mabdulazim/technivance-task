import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getLeagues } from '../../_actions';
import { Row, Col } from 'reactstrap';
import LeagueCard from './leagueCard';

export default function () 
{
    const leagues  = useSelector(state => state.getLeagues);
    const dispatch = useDispatch();

    useEffect(() => 
    {
        document.title = `Football Leagues`;
        dispatch(getLeagues());
    }, [dispatch]);

    return (
        <Fragment>

            {leagues.loading && <div className="loader"></div>}

            <Row>
                {leagues.data.map((league, i) => {
                    return(
                        <Col key={i} xs={6} sm={6} md={4} lg={3}>
                            <LeagueCard 
                                id={league.id}
                                name={league.name} 
                                area={league.area.name}
                            />
                        </Col>
                    );
                })}
            </Row>

        </Fragment>
    );
}