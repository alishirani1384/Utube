import React from 'react'
import { useQuery } from 'react-query'
import { getMostPopular } from '../utils';
import VideoCard from '../components/feature/VideoCard';
import Loading from '../components/layout/Loading';



const Home = () => {
  const {data, isLoading, error } = useQuery({
    queryKey: "popular",
    queryFn: getMostPopular,
  });
  console.log(isLoading);
  // console.log(data?.items);
  if (isLoading) return <Loading />;
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10 overflow-auto w-full dark:bg-gray-700'>
      {
        data?.items.map((v,i) => {
          return <VideoCard key={i} title={v.snippet.title} thumbnail={v.snippet.thumbnails.medium.url} name={v.snippet.channelTitle} />
        })
          }
    </main>
  )
}

export default Home