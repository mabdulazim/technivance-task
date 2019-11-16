import API from "./api.js";

export default async function getMatches(teamId) 
{
    return await API("GET", "teams/"+teamId+"/matches");
}
