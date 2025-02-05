import React from 'react'
import { useNavigate } from 'react-router-dom'

export const IMG_BASE_TV_URL = "https://media.themoviedb.org/t/p/w440_and_h660_face/";

export default function Tvprogram(props) {
    const navigate = useNavigate();
    const onClickTvItem = () => {
        navigate(`/tv/${props.name}`, {
            state: props
        })
    }
  return (
    <div className='tv-container' onClick={onClickTvItem}>
        <img src={IMG_BASE_TV_URL + props.poster_path} alt='프로그램 포스터'/>
        <div className='tv-info'>
            <h4>{props.name}</h4>
            <span>{props.vote_average.toFixed(1)}</span>
        </div>
    </div>
  )
}
