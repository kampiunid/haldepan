import Link from 'next/link'
import React from 'react'

export default function SingleNewsCard() {
  return (
    <div className='post-news-item-2 mt-40'>
      <div className='post-news-thumb'>
        <img src='/images/post-news-thumb-1.png' alt='' />
      </div>
      <div className='post-news-content'>
        <h3 className='title'>
          <Link href='/post-details-one'>
            Japan’s virus success puzzled the world luck running out?
          </Link>
        </h3>
        <p>
          The property, complete with 30-seat screening from room, a 100-seat
          amphitheater and a swimming pond with sandy shower…
        </p>
        <div className='meta-post-2-style'>
          <div className='meta-post-categores'>
            <Link href='/post-details-one'>TECHNOLOGY</Link>
          </div>
          <div className='meta-post-date'>
            <span>April 26, 2020</span>
          </div>
        </div>
      </div>
    </div>
  )
}
