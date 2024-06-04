import Link from 'next/link'
import React from 'react'
import SportsNewsCarousel from './SportsNewsCarousel'

export default function SportsNews() {
  return (
    <div className='sports-news-area'>
      <div className='section-title'>
        <h3 className='title'>Sports News</h3>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <div className='trending-news-item mb-30'>
            <div className='trending-news-thumb'>
              <img src='/images/sports-news.jpg' alt='sports' />
            </div>
            <div className='trending-news-content'>
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
                  There may be no consoles in the future ea exec says
                </Link>
              </h3>
              <p className='text'>
                The property, complete with 30-seat screening from room, a
                100-seat amphitheater and a swimming pond with sandy shower…
              </p>
              <Link href='/post-details-two'>Read more</Link>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <SportsNewsCarousel dark />
        </div>
      </div>
    </div>
  )
}
