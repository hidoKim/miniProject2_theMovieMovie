import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';


export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    const rating = state.vote_average.toFixed(1);
    const overview = state.overview || "줄거리 정보가 없습니다";

  return (
    <div className='movie-detail-container'>
        <div className='movie-card'>
            <img 
                src={IMG_BASE_URL + state.poster_path} 
                alt='영화 포스터 이미지' 
            />
            <div className='movie-title'>{title}</div>
            <div className='movie-rating'>
              ⭐ {rating}/10
            </div>
            <div className='movie-overview'>{overview}</div>
        </div>
    </div>
  )
}
