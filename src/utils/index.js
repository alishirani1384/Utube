import axios from "axios";

export async function getMostPopular() {
    const urlLink = "https://api.jsonbin.io/v3/b/6408bc3febd26539d08b438b";
    const secondUrl = "https://api.npoint.io/72d013cd4c41bbcf0d15";
    const res = await axios(secondUrl);
    const data = await res.data;
    return data;
}