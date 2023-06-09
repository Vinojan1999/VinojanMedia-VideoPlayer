import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { fetchFromGoogleAPI } from '../utils/fetchFromGoogleAPI';
import { Sidebar, Videos } from './';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Latest Tamil');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromGoogleAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  console.log(videos);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      <Box sx={{ height: { sx: 'auto', md: '95vh' }, px: { sx: 0, md: 2 }, backgroundColor: '#00000d' }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 2, color: '#fff'}}>
          © Copyright 2023, VinojanMedia
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} >
          {selectedCategory} <span style={{ color: '#2F80ED'}}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed