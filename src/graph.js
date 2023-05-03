

import { userConfig } from "./authConfig";

/**
 * Attaches a given access token to  API call.
 * @param accessToken 
 */
export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
   
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(userConfig.userEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}