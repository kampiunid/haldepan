import React from 'react'

export default function ImageCard() {
  return (
    <div className='trending-image-post mt-40'>
      <img src='/images/trending-image-thumb.jpg' alt='' />
      <div className='trending-image-content'>
        <div className='post-meta'>
          <div className='meta-categories'>
            <a href='#'>TECHNOLOGY</a>
          </div>
          <div className='meta-date'>
            <span>March 26, 2020</span>
          </div>
        </div>
        <h3 className='title'>
          <a href='#'>Japans virus success has from puzzled the running out?</a>
        </h3>
      </div>
    </div>
  )
}
