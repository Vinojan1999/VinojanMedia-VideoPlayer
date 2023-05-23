import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { fetchFromGoogleAPI } from '../utils/fetchFromGoogleAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromGoogleAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromGoogleAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ 
            background: "linear-gradient(0deg, rgba(0,34,68,1) 0%, rgba(0,48,143,1) 32%, rgba(47,128,237,1) 100%)",
            zIndex: 10, 
            height: '300px',
            borderEndEndRadius: '30px',
            borderEndStartRadius: '30px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-115px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail