import axios from "axios";

const popularOpt = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "bMknfKXIFA8",
    part: "id,snippet",
    type: "video",
    order: "date",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function getMostPopular() {
   try {
       const response = await axios.request(popularOpt);
       return response.data;
    } catch (error) {
        console.error(error);
    }
}


