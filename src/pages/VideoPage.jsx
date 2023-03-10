import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';



const VideoPage = () => {
    const { id } = useParams();
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: { part: 'contentDetails,snippet,statistics', id: id },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_SOME_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    async function getVideo() {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    const { data, isLoading } = useQuery({ queryKey: "video", queryFn: getVideo });
    console.log(data);

    return (
        <div className='w-full flex flex-col gap-2'>
            <div className='lg:w-5/6 lg:mx-auto lg:mt-10'>
                <LiteYoutubeEmbed id={id} />
            </div>
            <div className='p-2 gap-5 lg:w-5/6 lg:mx-auto'>
                <b>{data?.items[0].snippet.title}</b>
                <p className='whitespace-pre-wrap overflow-x-clip'>{data?.items[0].snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoPage