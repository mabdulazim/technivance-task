import * as CONST from '../../_constants';
import getLeagueData from '../../services/getLeague';
    
const onSuccess = (dispatch, data) => 
{
    dispatch({ type:CONST.LEAGUE_SHOW_SUCCESS, data })
};
  
const onFailed = (dispatch, error) => 
{
    dispatch({ type:CONST.LEAGUE_SHOW_ERROR, error })
};
  
const handleResponse = (dispatch, response) => 
{
    if (response.status === 200) 
    {
        onSuccess(dispatch, response.data);
    }
    else 
    {
        onFailed(dispatch, response.data)
    }
}
  
export const getLeague = (leagueId) => 
{
    return async (dispatch) => 
    {
        dispatch({ type:CONST.LEAGUE_SHOW_REQUEST });
          
        getLeagueData(leagueId).then((response) => 
            handleResponse(dispatch, response)
        );  
    };
}