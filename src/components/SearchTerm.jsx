import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box,Typography} from '@mui/material';
import {Videos} from './';
import { FetchAPI } from './utils/FetchAPI';

const SearchTerm = () => {
    const {searchTerm} = useParams();
    const [vedio,setVedio] = useState([]);
   
    useEffect(()=>{
       FetchAPI(`search?part=snippet&q=${searchTerm}`)
       .then((data)=>setVedio(data.items))
    },[searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography fontWeight='bold' mb={2} sx={{ color: 'white' }} variant='h4'>
      Search Results for: <span style={{ color: '#f31503' }}>{searchTerm}</span> Videos
    </Typography>
    <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={vedio} />}
      </Box>
  </Box>
  )
}

export default SearchTerm
