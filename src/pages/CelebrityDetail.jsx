import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL_PEOPLE } from '../components/People';

export default function CelebrityDetail() {
    const { name } = useParams();
    const { state } = useLocation(); 
    const knownForTitles = state.known_for?.map(show => show.name || "제목 정보 없음") || [];
  return (
    <div className='celebrity-detail-container'>
      <img 
          className='celebrity-detail-poster'
          src={IMG_BASE_URL_PEOPLE + state.profile_path} 
          alt='프로필 이미지' 
      />
      <div className='celebrity-detail-info'>
          <h1 className='celebrity-detail-name'>{state.name}</h1>
          <h2>출연작</h2>
          <ul className='celebrity-detail-movies'>
              {knownForTitles.map((title, index) => (
                  <li key={index}>{title}</li>
              ))}
          </ul>
      </div>
    </div>
  );
}
