import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
   
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '9b7bfaffc5msh1883e9807b55cd4p1eeb3ajsnb284dd7ff851',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const FetchAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;

  };

