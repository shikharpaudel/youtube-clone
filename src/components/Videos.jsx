import React from 'react'
import {Box,Stack} from '@mui/material';
import { ChannelCard,VideoCard } from "./"; 
const Videos = ({videos,direction}) => { 
  return (
   <Stack direction={direction || "row"} alignItems='start' gap={1.3}justifyContent='start' flexWrap='wrap'>
    {videos.map((item,idx)=>(
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item}/>}
       {item.id.channelId && <ChannelCard channelDetail={item}/>}
         </Box>
    ))}
   </Stack>
  )
}

export default Videos
