import React from 'react'
import { tvDummy } from '../tvDummy';
import Tvprogram from '../components/Tvprogram';

export default function Tv() {
  return (
    <div className='tvs-container' style={{fontSize: '32px'}}>
      {tvDummy.results.map((item) => {
        return(
          <Tvprogram
            name={item.name}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview = {item.overview}
            first_air_date = {item.first_air_date}
          />
        );
      })}
    </div>
  );
}
