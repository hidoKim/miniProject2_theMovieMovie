import React from 'react'
import { tvDummy } from '../tvDummy'
import Tvprogram from '../components/Tvprogram'
import { IMG_BASE_TV_URL } from '../components/Tvprogram'
import { useLocation, useParams } from 'react-router-dom'

export default function TvDetail() {
    const { name } = useParams();
    const { state } = useLocation();

  return (
    <div className='tv-detail-container' style={{fontSize: '32px'}}>
        {tvDummy.results.map((item) => {
        return(
            <Tvprogram
            
            />
        );
        })}
    </div>
)
}
