import React from 'react'
import PopularNewsCarousel from './PopularNewsCarousel'
import VideoNews from './VideoNews'

export default function VideoNewsArea({ dark }) {
  return (
    <section className={`video-news-area ${dark ? 'video-news-dark' : ''}`}>
      <div className='container custom-container'>
        <div className={`video-news-box ${dark ? 'video-news-box-dark' : ''}`}>
          <div className='row'>
            <div className='col-lg-8'>
              <VideoNews dark />
            </div>
            <div className='col-lg-4'>
              <PopularNewsCarousel dark />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
