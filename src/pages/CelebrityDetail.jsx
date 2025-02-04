import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL_PEOPLE } from '../components/People';

export default function CelebrityDetail() {
    const { name } = useParams();
    const { state } = useLocation(); 
    const IMG_BASE_URL_MOVIES = 'https://image.tmdb.org/t/p/w200'

    return (
    <div className='celebrity-detail-container'>
      <img 
          className='celebrity-detail-poster'
          src={IMG_BASE_URL_PEOPLE + state.profile_path} 
          alt='프로필 이미지' 
      />
      <div className='celebrity-detail-info'>
          <h1 className='celebrity-detail-name'>{state.name}</h1>
          <p className='celebrity-detail-original-name'>({state.original_name})</p>
          <h2>대표작품</h2>
          <div className='celebrity-detail-movies'>
              {state.known_for_list.map((show, index) => (
                  <div key={index} className='c-d-movie-item'>
                      {show.poster_path ? (
                        <img 
                          className='c-d-movie-poster' 
                          src={IMG_BASE_URL_MOVIES + show.poster_path}
                          alt={show.title} 
                        />
                      ) : (
                        <div className='c-d-no-poster'>포스터 없음</div>
                      )}
                      <p className='c-d-movie-title'>{show.title}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
