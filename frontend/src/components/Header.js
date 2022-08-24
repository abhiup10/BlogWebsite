import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Tab, Tabs } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const [value, setvalue] = useState()
  return (
    <AppBar position='sticky'  sx={{ background: "linear-gradient(90deg, rgba(222,148,233,1) 0%, rgba(120,223,121,1) 0%, rgba(104,160,138,1) 0%, rgba(88,96,155,1) 0%, rgba(166,149,227,1) 49%);" 
     }}>
      <Toolbar>
        <Typography variant='h4' fontFamily={'aerial'} fontWeight='4'>DETAILED!</Typography>
{   isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight="auto" >
          <Tabs textColor='inherit' value={value} onChange={(e, val) => setvalue(val)} >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
          </Tabs>
        </Box> 
}

 <Box display="flex" marginLeft="auto">
   {  !isLoggedIn && <>     <Button LinkComponent={Link} to="/auth" 
        variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='primary' fontFamily={'aerial'}>Login</Button>

        <Button LinkComponent={Link} to="/auth"
          variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning' fontFamily={'aerial'}>SignUp</Button></>}

{ isLoggedIn && <Button
onClick={()=>dispath(authActions.logout())} 
LinkComponent={Link} to="/auth"
          variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>LogOut</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header