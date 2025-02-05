import React from 'react'
import { IMG_BASE_TV_URL } from '../components/Tvprogram'
import { useLocation, useParams } from 'react-router-dom'

export default function TvDetail() {
    const { name } = useParams();
    const { state } = useLocation();
    const rating = state.vote_average.toFixed(1);
    const overview = state.overview || "줄거리 정보가 없습니다";
    const first_air_date = state.first_air_date || "첫 방영일 정보가 없습니다";

  return (
    <div className='tv-detail-container'>
        <img
            className='tv-detail-poster'
            src={IMG_BASE_TV_URL + state.poster_path}
            alt='티비 포스터 이미지'
         />
         <div className='tv-detail-info'>
            <h1 className='tv-detail-name'>{name}</h1>
            <p className='tv-detail-date'>First Air Date: {first_air_date}</p>
            <div className='tv-detail-rating'>⭐ {rating} / 10</div>
            <p className='tv-detail-overview'>{overview}</p>
         </div>
    </div>
  );
}
