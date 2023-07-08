import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ChannelCard,Videos} from "./";

import { Box } from "@mui/material";
import { FetchAPI } from "./utils/FetchAPI";
const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [Video, setVideo] = useState([]);
  console.log(channelDetail, Videos);
  const { id } = useParams();
  useEffect(() => {
    FetchAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    FetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideo(data?.items);
    });
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:'radial-gradient(circle, rgba(0,36,34,0.5579481792717087) 0%, rgba(121,9,9,1) 0%, rgba(0,212,255,1) 100%)',
            height: "300px",
            zIndex: 10,
          }}
          
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
        <Box display='flex' gap={2}>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={Video}/>
        
        </Box>
       
      </Box>
    </Box>
  );
};

export default ChannelDetails;
