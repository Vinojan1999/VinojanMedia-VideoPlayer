import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* If the item has the id, Then the id points to the video id, That means that is a video. Then wants to rander <VideoCard />*/}
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos