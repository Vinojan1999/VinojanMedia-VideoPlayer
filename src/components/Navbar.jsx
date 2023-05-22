import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack 
    direction={{ xs: 'column', md: 'row' }} 
    alignItems="center" 
    p={2} 
    zIndex={999}
    sx={{ position: 'sticky', background: '#00000d', top: 0, justifyContent: 'space-between'}}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <img className='logo-desktop' src={Logo} alt='Logo' height={40} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar