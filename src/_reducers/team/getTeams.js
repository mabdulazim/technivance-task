import * as CONST from '../../_constants';

const INITIAL_STATE = {
    loading : true, 
    data    : [], 
    error   : null
}

export default (state = INITIAL_STATE, action) => 
{
    switch (action.type) 
    {    
        case CONST.TEAM_LIST_REQUEST:
            return {...state, loading: true, data:[], error:null}
        case CONST.TEAM_LIST_SUCCESS:
            return {...state, loading: false, data: action.data}
        case CONST.TEAM_LIST_ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}