import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL_PEOPLE = "https://media.themoviedb.org/t/p/w470_and_h470_face/";

export default function People(props) {
  const navigate = useNavigate();
  
  const onClickPeopleItem = () => {
    navigate(`/person/${props.name}`, {
      state: {
        ...props, 
        known_for_list: props.known_for?.map(show => ({
        title: show?.name || show?.title || "제목 정보 없음",
        poster_path: show?.poster_path || null
        })) || [] 
      }
    });
  };

  return (
    <div className='peoples-container' onClick={onClickPeopleItem}>
      <img src={IMG_BASE_URL_PEOPLE + props.profile_path} alt='프로필 사진'/>
      <div className='peoples-info'>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}
