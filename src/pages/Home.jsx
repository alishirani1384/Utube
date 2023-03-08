import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { getMostPopular } from '../utils';
import VideoCard from '../components/feature/VideoCard';
import { Context } from '../components/layout/Layout';



const Home = () => {
  const {data, isLoading, error } = useQuery({
    queryKey: "popular",
    queryFn: getMostPopular,
  });
  const { open, setOpen } = useContext(Context);
  if (isLoading) return <div>loading...</div>;
  return (
    <main className='grid overflow-auto w-full dark:bg-gray-700'>
      {
        data?.record?.mostviewedvideos.map(v => {
         return <VideoCard key={v.id} title={v.title} thumbnail={v.small_poster} />
        })
          }
    </main>
  )
}

export default Home