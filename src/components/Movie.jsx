import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face/";

export default function Movie(props) {
    const naviagte = useNavigate();
    const onClickMovieItem = () => {
        naviagte(`/movie/${props.title}`, {
            state: props
        })
    }
  return (
    <div className='movie-container' onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt='영화 포스터'/>
      <div className='movie-info'>
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  )
}