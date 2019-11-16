import * as CONST from '../../_constants';
import getMatchesData from '../../services/getMatches';
    
const onSuccess = (dispatch, data) => 
{
    dispatch({ type:CONST.MATCH_LIST_SUCCESS, data : data.matches })
};
  
const onFailed = (dispatch, error) => 
{
    dispatch({ type:CONST.MATCH_LIST_ERROR, error })
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
  
export const getMatches = (teamId) => 
{
    return async (dispatch) => 
    {
        dispatch({ type:CONST.MATCH_LIST_REQUEST });
          
        getMatchesData(teamId).then((response) => 
            handleResponse(dispatch, response)
        );  
    };
}