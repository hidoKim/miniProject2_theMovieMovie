import React from 'react'
import { peopleD } from '../peopleDummy'
import People from '../components/People'

export default function Celebrity() {
  return (
    <div className='celebrity-container' style={{fontSize: '32px'}}>
        {peopleD.results.map((item) => {
         return(
            <People
                key={item.id}
                name={item.name}
                profile_path={item.profile_path}
                known_for={item.known_for} // 전체 배열 전달
                original_name={item.original_name}
            />
        );
        })}
    </div>
  );
}