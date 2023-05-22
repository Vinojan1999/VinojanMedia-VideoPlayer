import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        // When we submit a form, usually It's reload the page. In ReactJS we don't wanna do that, So we are using "e.preventDefault()"
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #00001a',
            backgroundColor: '#2f81ed2d',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}
    >
        <input
            className='search-bar'
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <IconButton type='submit' sx={{ p: '10px', color: '#2F80ED'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar