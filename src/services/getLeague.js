import API from "./api.js";

export default async function getLeagues(leagueId) 
{
    return await API("GET", "competitions/"+leagueId);
}
