import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FetchAPI } from "./utils/FetchAPI";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import {Videos} from "./";

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const[video,setVideo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    FetchAPI(`videos?.part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });
    FetchAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data)=>{
      setVideo(data.items);
    })
  }, [id]);
 if(!video?.length) return 'Loading...';
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ position: "sticky", width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" fontWeight="bold" color="#fff" p={1}>
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={0.5}
              px={1}
            >
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetails?.snippet?.channelTitle}
                </Typography>
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.5 }}>
                  {parseInt(
                    videoDetails?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.5 }}>
                  {parseInt(
                    videoDetails?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={video} direction="column" />
        </Box>
      </Stack>
      
    </Box>
  );
};

export default VideoDetails;
