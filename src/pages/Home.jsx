import React from 'react'
import TopMovie from '../components/TopMovie'
import { TRMDummy } from '../topRatedMovieDummy';

export default function Home() {
  return (
    <div className='home-container'>
      <h2>Top Movies</h2>
      <div className='top-movie-grid'>
        {TRMDummy.results.map((item) => (
          <TopMovie 
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
}