import API from "./api.js";

export default async function getTeams(leagueId) 
{
    return await API("GET", "competitions/"+leagueId+"/teams");
}
