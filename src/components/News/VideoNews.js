"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function VideoNews({ dark }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='video-news-post'>
      <div className='section-title section-title-2'>
        <h3 className='title'>Videos News</h3>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='eEzD-Y97ges'
        onClose={() => setOpen(false)}
      />
      <div
        className={`video-news-post-item ${
          dark ? 'video-news-post-item-dark' : ''
        }`}
      >
        <div className='video-news-post-thumb'>
          <img src='/images/video-post-thumb.jpg' alt='' />
          <div className='play-btn' onClick={() => setOpen(true)}>
            <a
              onClick={(e) => e.preventDefault()}
              className='video-popup'
              href='#'
            >
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
        <div className='video-news-post-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-two'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-two'>
              Riots Report Shows London Needs To Maintain Police Numbers, Says
              Mayor
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}
