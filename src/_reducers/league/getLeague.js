import * as CONST from '../../_constants';

const INITIAL_STATE = {
    loading : true, 
    data    : null, 
    error   : null
}

export default (state = INITIAL_STATE, action) => 
{
    switch (action.type) 
    {    
        case CONST.LEAGUE_SHOW_REQUEST:
            return {...state, loading: true, data:null, error:null}
        case CONST.LEAGUE_SHOW_SUCCESS:
            return {...state, loading: false, data: action.data}
        case CONST.LEAGUE_SHOW_ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}