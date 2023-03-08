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
  
  console.log(data?.mostviewedvideos);
  if (isLoading) return <div>loading...</div>;
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10 overflow-auto w-full dark:bg-gray-700'>
      {
        data.mostviewedvideos.map(v => {
         return <VideoCard key={v.id} title={v.title} video={v.frame} date={v.sdate} />
        })
          }
    </main>
  )
}

export default Home