import Link from 'next/link'
import React from 'react'

export default function OpinionNews() {
  return (
    <div className='opinion-post mt-40'>
      <div className='section-title section-title-3'>
        <h3 className='title'>Opinion News</h3>
      </div>
      <div className='trending-news-item mb-30'>
        <div className='trending-news-thumb'>
          <img src='/images/opinion/1.jpg' alt='trending' />
          <div className='circle-bar'>
            <div className='first circle'>
              <strong></strong>
            </div>
          </div>
        </div>
        <div className='trending-news-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-one'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-one'>
              Japan’s virus success puzzled the world luck running out?
            </Link>
          </h3>
          <p className='text'>
            The property, complete with seates screening from room amphitheater
            pond with sandy shower…
          </p>
          <ul>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-eye'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-heart'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='fas fa-share'></i> 53,346
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='trending-news-item mb-30'>
        <div className='trending-news-thumb'>
          <img src='/images/opinion/2.jpg' alt='trending' />
          <div className='circle-bar'>
            <div className='first circle'>
              <strong></strong>
            </div>
          </div>
        </div>
        <div className='trending-news-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-one'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-one'>
              Japan’s virus success puzzled the world luck running out?
            </Link>
          </h3>
          <p className='text'>
            The property, complete with seates screening from room amphitheater
            pond with sandy shower…
          </p>
          <ul>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-eye'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-heart'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='fas fa-share'></i> 53,346
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='trending-news-item mb-30'>
        <div className='trending-news-thumb'>
          <img src='/images/opinion/3.jpg' alt='trending' />
          <div className='circle-bar'>
            <div className='first circle'>
              <strong></strong>
            </div>
          </div>
        </div>
        <div className='trending-news-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-one'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-one'>
              Japan’s virus success puzzled the world luck running out?
            </Link>
          </h3>
          <p className='text'>
            The property, complete with seates screening from room amphitheater
            pond with sandy shower…
          </p>
          <ul>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-eye'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='far fa-heart'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-one'>
                <i className='fas fa-share'></i> 53,346
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
