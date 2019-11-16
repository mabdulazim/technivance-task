import API from "./api.js";

export default async function getLeagues() 
{
    return await API("GET", "competitions");
}
