import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';


export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    const rating = state.vote_average.toFixed(1);
    const overview = state.overview || "줄거리 정보가 없습니다";
    const release_date = state.release_date || "개봉일 정보가 없습니다";

  return (
    <div className='movie-detail-container'>
      <img 
          className='movie-detail-poster'
          src={IMG_BASE_URL + state.poster_path} 
          alt='영화 포스터 이미지' 
      />
      <div className='movie-detail-info'>
          <h1 className='movie-detail-title'>{title}</h1>
          <p className='movie-detail-date'>Release {release_date}</p>
          <div className='movie-detail-rating'>⭐ {rating} / 10</div>
          <p className='movie-detail-overview'>{overview}</p>
      </div>
    </div>
  );
}
