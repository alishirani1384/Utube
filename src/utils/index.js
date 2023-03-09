import axios from "axios";

// export async function getMostPopular() {
//     const urlLink = "https://api.jsonbin.io/v3/b/6408bc3febd26539d08b438b";
//     const secondUrl = "https://api.npoint.io/72d013cd4c41bbcf0d15";
//     const res = await axios(secondUrl);
//     const data = await res.data;
//     return data;
// }

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
    headers: {
        'X-RapidAPI-Key': '436a2fee38msh16b72c7bf3ef475p1ca5e8jsn868f2489df15',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export async function getMostPopular() {
   try {
       const response = await axios.request(options);
       return response.data;
    } catch (error) {
        console.error(error);
    }
    
}
