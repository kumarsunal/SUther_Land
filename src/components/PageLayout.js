
import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import HeadBarContainer from "./HeaderBar"


export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <HeadBarContainer isAuthenticated={isAuthenticated}/>
      <br />
      <h5>
        <center>
            <div>
            {props.children}
          </div>
        </center>
      </h5>
    </>
  );
};