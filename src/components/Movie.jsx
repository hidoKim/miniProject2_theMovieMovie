import React from 'react'

const IMG_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face/";

export default function Movie({ title, poster_path, vote_average }) {
  return (
    <div className='movie-container'>
      <img src={IMG_BASE_URL + poster_path} alt='영화 포스터'/>
      <div className='movie-info'>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  )
}
