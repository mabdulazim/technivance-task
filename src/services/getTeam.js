import API from "./api.js";

export default async function getTeam(teamId) 
{
    return await API("GET", "teams/"+teamId);
}
