import React from 'react'

export const IMG_BASE_TOP_RANK_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face/";

export default function TopMovie(props) {
    return (
        <div className='top-movie-item'>
            <img 
                className='top-movie-poster'
                src={IMG_BASE_TOP_RANK_URL + props.poster_path}
                alt={props.title || "포스터 이미지가 없습니다"}
            />
            <p className='top-movie-title'>{props.title}</p>
        </div>
    )
}
