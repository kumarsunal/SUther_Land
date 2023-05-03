

import { LogLevel } from "@azure/msal-browser";



export const msalConfig = {
    auth: {
        clientId: "40fc943c-6c71-44d9-b4d7-e74ce5de1d66",
        authority: "https://login.microsoftonline.com/46c12326-5127-4b68-b5b6-10226b34f98d",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};


export const loginRequest = {
    scopes: ["User.Read"]
};


export const userConfig = {
    userEndpoint: "https://dummy.restapiexample.com/api/v1/employees",
};