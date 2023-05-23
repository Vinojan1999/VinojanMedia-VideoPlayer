import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { fetchFromGoogleAPI } from '../utils/fetchFromGoogleAPI';
import { Videos } from './';

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromGoogleAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={4} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} pb={{ md: '1rem' }}>
        Search Results for: <span style={{ color: '#2F80ED'}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} width='354px' />
    </Box>
  )
}

export default SearchFeed