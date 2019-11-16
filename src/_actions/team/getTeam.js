import * as CONST from '../../_constants';
import getTeamData from '../../services/getTeam';
    
const onSuccess = (dispatch, data) => 
{
    dispatch({ type:CONST.TEAM_SHOW_SUCCESS, data })
};
  
const onFailed = (dispatch, error) => 
{
    dispatch({ type:CONST.TEAM_SHOW_ERROR, error })
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
  
export const getTeam = (teamId) => 
{
    return async (dispatch) => 
    {
        dispatch({ type:CONST.TEAM_SHOW_REQUEST });
          
        getTeamData(teamId).then((response) => 
            handleResponse(dispatch, response)
        );  
    };
}