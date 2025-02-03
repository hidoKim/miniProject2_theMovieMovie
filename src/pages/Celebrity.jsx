import React from 'react'
import { peopleD } from '../peopleDummy'
import People from '../components/People'

export default function Celebrity() {
  return (
    <div className='celebrity-container' style={{fontSize: '32px'}}>
        {peopleD.results.map((item) => {
         return(
          <People
            name={item.name}
            profile_path={item.profile_path}
            known_for={item.known_for.map(show => show.name || "제목 정보 없음")}
          />
        );
        })}
    </div>
  );
}