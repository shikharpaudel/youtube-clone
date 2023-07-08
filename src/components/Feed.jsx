import React, { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchAPI } from './utils/FetchAPI';
const Feed = () => {
  const[selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    FetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      setVideos(data.items);
    })
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ color: 'white', mt: 1.5 }}>Copy Right 2023 AntiBug</Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography fontWeight='bold' mb={2} sx={{ color: 'white' }} variant='h4'>
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      
    </Stack>
  )
}

export default Feed
