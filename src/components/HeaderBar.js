
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export default function ButtonAppBar(props) {
  const { instance } = useMsal();
  const handleLogin = () => {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    
  };

  const handleLogout = () => {
   
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    
      
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Suther Land
          </Typography>
          {props.isAuthenticated ?
          
          <Button color="inherit" onClick={() => handleLogout()}>LogOut</Button>:
          <Button color="inherit" onClick={() => handleLogin()}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}