import React from 'react'
import { useNavigate } from 'react-router-dom'

export const IMG_BASE_URL_PEOPLE = "https://media.themoviedb.org/t/p/w470_and_h470_face/";

export default function People(props) {
  const navigate = useNavigate();
  const onClickPeopleItem = () => {
    navigate(`/person/${props.title}`, {
      state: props
    })
  }
  return (
    <div className='peoples-container' onClick={onClickPeopleItem}>
      <img src={IMG_BASE_URL_PEOPLE + props.profile_path} alt='프로필 사진'/>
      <div className='peoples-info'>
        <h4>{props.name}</h4>
      </div>
    </div>
  )
}
