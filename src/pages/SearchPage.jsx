import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import VideoCard from '../components/feature/VideoCard';
import Loading from '../components/layout/Loading';

const SearchPage = () => {
  const params = useParams();
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: params.slug,
      part: 'snippet',
      regionCode: 'US',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_SOME_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  async function getSearchedVideo() {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data, isLoading } = useQuery({ queryKey: ["searchedvideo", params.slug], queryFn: getSearchedVideo, });
  if (isLoading) return <Loading />
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:m-10 my-10 overflow-auto w-full dark:bg-gray-700'>
      {data?.items.map((v, i) => {
        return <Link key={i} to={`/video/${v.id.videoId}`}> <VideoCard thumbnail={v.snippet.thumbnails.medium.url} title={v.snippet.title} name={v.snippet.channelTitle} /></Link>
      })}
    </main>
  )
}

export default SearchPage