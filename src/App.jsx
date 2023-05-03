import React, { useState } from 'react';

import { PageLayout } from './components/PageLayout';


import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import TableContainer from"./components/Table"

import './App.css';



const MainContent = () => {
  return (
      <div className="App">
          <AuthenticatedTemplate>
              <TableContainer />
          </AuthenticatedTemplate>
  
          <UnauthenticatedTemplate>
              <h5>
                  <center>
                      Please sign-in to go your DashBoard.
                  </center>
              </h5>
          </UnauthenticatedTemplate>
      </div>
  );
};
  
export default function App() {
  return (
      <PageLayout>
          <center>
              <MainContent />
          </center>
      </PageLayout>
  );
}