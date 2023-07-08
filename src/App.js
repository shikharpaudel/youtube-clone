import React from 'react'
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar,Feed,VideoDetails,SearchTerm,ChannelDetails } from './components/index';
const App = () => (
     
  
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
  <Navbar />
  <Routes>
    <Route path='/' exact element={<Feed />} />
    <Route path='/video/:id' exact element={<VideoDetails />} />
    <Route path='/channel/:id' exact element={<ChannelDetails />} />
    <Route path='/search/:searchTerm' exact element={<SearchTerm />} />
    
  </Routes>
  </Box>
  </BrowserRouter>
    
  )


export default App;
