import { combineReducers } from 'redux';

import getLeague from './league/getLeague';
import getLeagues from './league/getLeagues';

import getTeam from './team/getTeam';
import getTeams from './team/getTeams';

import getMatches from './match/getMatches';

const reducer = combineReducers({
    getLeague,
    getLeagues,
    getTeam,
    getTeams,
    getMatches,
})

export default reducer