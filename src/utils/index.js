import axios from "axios";

export async function getMostPopular() {
    const urlLink = "https://api.jsonbin.io/v3/b/6408bc3febd26539d08b438b";
    const res = await axios(urlLink);
    const data = await res.data;
    return data;
}