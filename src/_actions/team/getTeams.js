import * as CONST from '../../_constants';
import getTeamsData from '../../services/getTeams';
    
const onSuccess = (dispatch, data) => 
{
    dispatch({ type:CONST.TEAM_LIST_SUCCESS, data : data.teams });
};
  
const onFailed = (dispatch, error) => 
{
    dispatch({ type:CONST.TEAM_LIST_ERROR, error })
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
  
export const getTeams = (leagueId) => 
{
    return async (dispatch) => 
    {
        dispatch({ type:CONST.TEAM_LIST_REQUEST });
          
        getTeamsData(leagueId).then((response) => 
            handleResponse(dispatch, response)
        );  
    };
}