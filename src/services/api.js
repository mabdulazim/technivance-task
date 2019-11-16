import axios from "axios";

export const baseURL = "http://api.football-data.org/v2/";

export default function api(method, url) 
{
    let headers = {
        'Content-Type' : "application/json",
        'X-Auth-Token' : "9342f29746174b0a9fa6fd3cd8df8307",
    };
    return axios({
        method,
        baseURL: baseURL,
        url,
        headers
    })
    .then(response =>
    {
        return response;
    })
    .catch(function(error) 
    {
        return error.response;
    });
}
