import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import TeamCard from './teamCard';
import { getTeams } from '../../_actions';

export default function () 
{
    const teams    = useSelector(state => state.getTeams);
    const dispatch = useDispatch();
    const params   = useParams();

    useEffect(() => 
    {
        dispatch(getTeams(params.id));
    }, [dispatch, params]);

    return (
        <Fragment>

            {teams.loading && <div className="loader"></div>}

            <Row>
                {teams.data.map((team, i) => {
                    return(
                        <Col key={i} xs={6} md={4} lg={3}>
                            <TeamCard 
                                id={team.id}
                                name={team.name} 
                                area={team.area.name}
                            />
                        </Col>
                    );
                })}
            </Row>
            
        </Fragment>
    );
}