import * as CONST from '../../_constants';
import getLeaguesData from '../../services/getLeagues';
    
const onSuccess = (dispatch, data) => 
{
    dispatch({ type:CONST.LEAGUE_LIST_SUCCESS, data : data.competitions })
};
  
const onFailed = (dispatch, error) => 
{
    dispatch({ type:CONST.LEAGUE_LIST_ERROR, error })
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
  
export const getLeagues = () => 
{
    return async (dispatch) => 
    {
        dispatch({ type:CONST.LEAGUE_LIST_REQUEST });
          
        getLeaguesData().then((response) => 
            handleResponse(dispatch, response)
        );  
    };
}